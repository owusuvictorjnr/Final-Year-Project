import User from '@/models/User'
import db from '@/utils/db'
import bcryptjs from 'bcryptjs'
import { verifyPasswordResetToken } from 'next-auth/react' // Import verifyPasswordResetToken

async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res.status(400).send({ message: `${req.method} not supported` })
  }

  const { token, newPassword } = req.body // Get token and new password from request body

  try {
    await verifyPasswordResetToken(token) // Verify the password reset token

    const user = await User.findOne({
      passwordResetToken: token,
      passwordResetExpires: { $gt: Date.now() },
    })

    if (!user) {
      return res
        .status(401)
        .send({ message: 'Invalid or expired password reset token' })
    }

    // Validate new password length
    if (newPassword.trim().length < 5) {
      res.status(422).json({
        message:
          'Validation error: New password must be at least 5 characters long',
      })
      return
    }

    await db.connect()

    user.password = bcryptjs.hashSync(newPassword)
    user.passwordResetToken = undefined // Clear the password reset token
    user.passwordResetExpires = undefined // Clear the expiration timestamp

    await user.save()

    await db.disconnect()

    res.send({ message: 'Password updated successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).send({ message: 'Internal server error' })
  }
}

export default handler

const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const router = express.Router();

router.post('/create-user', async (req, res) => {
  const body = req.body;
  // { name: 'Ash', email: 'ash@udi.com', tel: '1234567890'}
  console.log(body);

  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        name: body.name,
        tel: body.tel,
      },
    })

  } catch (error) {
    console.error('Error creating user:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;

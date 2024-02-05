// src/api/submitAnswer.ts
import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../utils/conectDB';
import AnswerModel from '../models/AnswerModel';

connectDB();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { cardId, buttonNumber } = req.body;

      // Validate buttonNumber to avoid injection or errors
      const validButtonNumbers = ['button1', 'button2', 'button3', 'button4'];
      if (!validButtonNumbers.includes(buttonNumber)) {
        return res.status(400).json({ success: false, error: 'Invalid button number' });
      }

      // Increment the specific button for the given card
      const updateQuery = { $inc: { [buttonNumber]: 1 } };
      const updatedAnswer = await AnswerModel.findOneAndUpdate({ cardId }, updateQuery, { new: true });

      if (!updatedAnswer) {
        return res.status(404).json({ success: false, error: 'Card not found' });
      }

      res.status(200).json({ success: true, message: 'Button count incremented successfully', data: updatedAnswer });
    } catch (error) {
      console.error('Error incrementing button count:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
};

export default handler;

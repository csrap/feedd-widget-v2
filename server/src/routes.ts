import express from 'express'; 
import { NodemailerMailAdapter } from './nodemailer/nodemailer-mail-adapter';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedback-repository';
import { SubmitFeedbackUseCase } from './use-cases/sumbit-feedback-use-case';

  export const routes = express.Router()



routes.post('/feedbacks', async (req, res) => {

  const {type, comment, screenshot} = req.body; 

  const prismaFeedbackRepository = new PrismaFeedbacksRepository()
  const nodemailerMailAdapter =  new NodemailerMailAdapter ()
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbackRepository,
    nodemailerMailAdapter
  )

  await submitFeedbackUseCase.execute( {
    type,
    comment,
    screenshot
  })

    // const feedback = 

   

    return res.status(201).send() 
}); 

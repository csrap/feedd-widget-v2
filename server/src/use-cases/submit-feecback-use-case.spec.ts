import { SubmitFeedbackUseCase } from "./sumbit-feedback-use-case";

//spies = espioes 

const createFeedbackSpy = jest.fn(); 
const sendMailSpy = jest.fn(); 

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy}
)

describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'example comment',
      screenshot: 'data:image/png;base64'
    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled(); 

  }); 

    it('should not be able to submit a feedback without type', async () => {
      await expect(submitFeedback.execute({
        type: '',
        comment: 'example comment',
        screenshot: 'data:image/png;base64'
      })).rejects.toThrow();
  });


  it('should not be able to submit a feedback without comment', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64'
    })).rejects.toThrow();
    });


    it('should not be able to submit a feedback with invalid screenshot', async () => {
      await expect(submitFeedback.execute({
        type: 'BUG',
        comment: 'ta tudo bugado',
        screenshot: 'test.jpg'
      })).rejects.toThrow();
  });
  
  
});
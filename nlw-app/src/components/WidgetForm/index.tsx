import React, { useState } from 'react';
import CloseButton from '../CloseButton'; 

import bugImageUrl from '../../assets/button-card/Figmoji/Bug.svg'; 
import ideaImageUrl from '../../assets/button-card/Figmoji/Idea.svg'; 
import thoughtImageUrl from '../../assets/button-card/Figmoji/Thought.svg'; 
import FeedbackTypeStep from './Steps/FeedbackTypeStep';
import FeedbackContentStep from './Steps/FeedbackContentStep';
import FeedbackSuccessStep from './Steps/FeedbackSuccessStep';

export const feedbackTypes = {
  BUG: {
    title:'Problema',
    image: {
      source: bugImageUrl,
      alt:'Imagen de um inseto'
    },
  },
  IDEA: {
    title:'Idea',
    image: {
      source: ideaImageUrl,
      alt:'Imagen de uma lámpada'
    },
  },
  OTHER: {
    title:'Outro',
    image: {
      source: thoughtImageUrl,
      alt:'Imagen de um balao de pensamento'
    },
  },
}; 

export type FeedbackType =  keyof typeof feedbackTypes; 

export default function WidgetForm() {

const [feedbackType, setFeedbackType] = useState<FeedbackType | null >(null);
const [feedbackSent, setFeedbackSent] = useState(false); 

function handleRestartFeedback(){
  setFeedbackSent(false); 
  setFeedbackType(null); 
}



  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      { feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequested ={handleRestartFeedback}/>
      ) : (
        <>
      {!feedbackType ? (
      <FeedbackTypeStep  onFeedbackTypeChanged={setFeedbackType}/>
          ) : (
              <FeedbackContentStep 
              feedbackType={feedbackType} 
              onFeedbackRestartRequested= {handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
              />
            )}
            </>
      )}


    <footer className="text-xs text-neutral-400">
      Feito com ♥ pela <a className="underline underline-offset-2" href="https://rockeseat.com.br">Rocketseat</a>
    </footer>
    </div>
  ); 
}

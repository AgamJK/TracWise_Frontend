import { useState, useRef, useCallback } from 'react';

interface TextToSpeechHook {
  isSpeaking: boolean;
  speak: (text: string) => void;
  stop: () => void;
  pause: () => void;
  resume: () => void;
  browserSupportsTextToSpeech: boolean;
}

export const useTextToSpeech = (): TextToSpeechHook => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const browserSupportsTextToSpeech = 'speechSynthesis' in window;

  const speak = useCallback((text: string) => {
    if (!browserSupportsTextToSpeech) {
      console.warn('Text-to-speech not supported in this browser');
      return;
    }

    // Stop any current speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utteranceRef.current = utterance;

    // Configure speech settings
    utterance.rate = 0.9; // Slightly slower for better comprehension
    utterance.pitch = 1;
    utterance.volume = 1;

    // Try to use a more natural voice
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(voice => 
      voice.lang.startsWith('en') && 
      (voice.name.includes('Google') || voice.name.includes('Microsoft'))
    ) || voices.find(voice => voice.lang.startsWith('en'));
    
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    // Event listeners
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  }, [browserSupportsTextToSpeech]);

  const stop = useCallback(() => {
    if (browserSupportsTextToSpeech) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, [browserSupportsTextToSpeech]);

  const pause = useCallback(() => {
    if (browserSupportsTextToSpeech && window.speechSynthesis.speaking) {
      window.speechSynthesis.pause();
    }
  }, [browserSupportsTextToSpeech]);

  const resume = useCallback(() => {
    if (browserSupportsTextToSpeech && window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }
  }, [browserSupportsTextToSpeech]);

  return {
    isSpeaking,
    speak,
    stop,
    pause,
    resume,
    browserSupportsTextToSpeech,
  };
};
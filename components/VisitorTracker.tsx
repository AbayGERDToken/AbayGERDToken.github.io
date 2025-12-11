'use client';

import { useEffect } from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default function VisitorTracker() {
  useEffect(() => {
    const trackVisitor = async () => {
      try {
        const response = await fetch('https://ipinfo.io/json');
        const data = await response.json();
        
        await addDoc(collection(db, 'visitorData'), {
          timestamp: Timestamp.now(),
          city: data.city || '',
          country: data.country || '',
          region: data.region || '',
        });
      } catch (error) {
        console.error('Error tracking visitor:', error);
      }
    };

    trackVisitor();
  }, []);

  return null;
}






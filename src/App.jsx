import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';
import BookingModal from './components/BookingModal';
import TopicDetailModal from './components/TopicDetailModal';
import HomePage from './pages/HomePage';
import CruiseShipPage from './pages/CruiseShipPage';

function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 60);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [activeTopic, setActiveTopic] = useState(null);
  const [bookingState, setBookingState] = useState({ open: false, context: '' });

  const openBooking = (context = '') => setBookingState({ open: true, context });
  const closeBooking = () => setBookingState({ open: false, context: '' });

  return (
    <BrowserRouter>
      <ScrollHandler />
      <Navbar onOpenBooking={openBooking} onOpenVideo={setActiveVideo} />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onOpenVideo={setActiveVideo}
                onOpenBooking={openBooking}
                onOpenTopic={setActiveTopic}
              />
            }
          />
          <Route
            path="/cruise-ship-speaking"
            element={
              <CruiseShipPage
                onOpenVideo={setActiveVideo}
                onOpenBooking={openBooking}
              />
            }
          />
          <Route
            path="*"
            element={
              <HomePage
                onOpenVideo={setActiveVideo}
                onOpenBooking={openBooking}
                onOpenTopic={setActiveTopic}
              />
            }
          />
        </Routes>
      </main>

      <Footer onOpenBooking={openBooking} />

      <VideoModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
        onBook={(label) => openBooking(label)}
      />

      <TopicDetailModal
        topic={activeTopic}
        onClose={() => setActiveTopic(null)}
        onBook={(label) => openBooking(label)}
      />

      <BookingModal
        open={bookingState.open}
        contextLabel={bookingState.context}
        onClose={closeBooking}
      />
    </BrowserRouter>
  );
}

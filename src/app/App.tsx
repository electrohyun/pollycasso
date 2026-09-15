import { ToastContainer } from 'react-toastify';
import { OverlayProvider } from 'overlay-kit';

import { SoundProvider } from '@/entities/sound';
import { ChatSocketProvider } from '@/shared/api/socket/ChatSocketProvider';
import { FriendSocketProvider } from '@/shared/api/socket/FriendSocketProvider';
import { SocketGlobalAlert } from '@/shared/ui/SocketGlobalAlert';
import QueryProvider from './queryProvider';
import Router from './Router';
import { SocketProvider } from './socketProvider';

const App = () => {
  return (
    <QueryProvider>
      <SocketProvider>
        <SocketGlobalAlert />

        <FriendSocketProvider>
          <ChatSocketProvider>
            <SoundProvider>
              <OverlayProvider>
                <Router />
              </OverlayProvider>
            </SoundProvider>
          </ChatSocketProvider>
        </FriendSocketProvider>

        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
          theme="light"
          limit={4}
          icon={false}
        />
      </SocketProvider>
    </QueryProvider>
  );
};

export default App;

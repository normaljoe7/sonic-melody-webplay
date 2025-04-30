
import { AudioProvider } from "../contexts/AudioContext";
import { Sidebar } from "../components/Sidebar";
import { Main } from "../components/Main";
import { Player } from "../components/Player";

const Index = () => {
  return (
    <AudioProvider>
      <div className="flex flex-col h-screen bg-spotify-base overflow-hidden">
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <Main />
        </div>
        <Player />
      </div>
    </AudioProvider>
  );
};

export default Index;

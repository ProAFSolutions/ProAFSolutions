
interface NgAudioObject {
    play(): void;
    pause(): void;
    stop(): void;
    unbind(): void;
}

interface ngAudio {
    load(path: string): NgAudioObject;
    play(path: String): NgAudioObject;
    mute(): void;
    unmute(): void;

}
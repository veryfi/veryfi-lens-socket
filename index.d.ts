declare module 'veryfi-lens-socket' {

  
    interface VeryfiLensSocket {
      init(session: string, client_id: string): Promise<void>;
      startCamera(): void;
      stopCamera(): void;
      capture(setImage?: (image: string) => void, setIsEditing?: (isEditing: boolean) => void): Promise<string>;
      createNewSession(clientId: string): Promise<void>;
      setUserAgent(ua: string): void;
      getBoxColor(): string;
      setBoxColor(color: string): void;
      getCroppedImage(): HTMLCanvasElement;
      getCoordinates(): number[][];
      getHasCoordinates(): boolean;
      getHasInit(): boolean;
      getIsDocument(): boolean;
      getLensSessionKey(): string;
      setLensSessionKey(key: string): void;
      getSocketStatus(): { value: number; state: string };
      getSocketStatusColor(): string;
      getBlurStatus(setIsBlurry?: (isBlurry: boolean) => void): { blurStatus: boolean; variance: number };
      cleanCanvases(): void;
      getDeviceData(): Promise<{
        browser_fingerprint: Record<string, any>;
        uuid: string;
        source: string;
      }>;
    }
  
    const VeryfiLensInstance: VeryfiLensSocket;
    export default VeryfiLensInstance;
  }
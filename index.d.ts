export interface FileDownloader {
  static downloadFileAsPdf(
    data: File | ArrayBuffer | Blob,
    fileName: ?string
  ): Promise<void>
  static downloadFileAs(
    data: File | ArrayBuffer | Blob,
    type: ?string = 'text/plain',
    fileName: ?string = 'Download'
  ): Promise<void>
  static downloadFile(blob: Blob, fileName: string): void
  static base64ToArrayBuffer(base64: string): ArrayBuffer
}

declare const FileDownloader: FileDownloader

export default FileDownloader

interface File_picker_opts {
  multiple?: boolean
}

interface File_saver_opts {
  types: {
    accept: Record<string, string[]>
  }[]
}

interface Window {
  launchQueue?: {
    setConsumer: (callback: (params: { files: FileSystemFileHandle[] }) => void) => void
  }
  showOpenFilePicker?: (opts: File_picker_opts) => Promise<FileSystemFileHandle[]>
  showSaveFilePicker?: (opts: File_saver_opts) => Promise<FileSystemFileHandle>
}

interface Blob_rom {
  fileName: string
  fileContent: Blob
}
/** Nostalgist rom: https://nostalgist.js.org/apis/launch/#rom */
type ROM = File | Blob_rom

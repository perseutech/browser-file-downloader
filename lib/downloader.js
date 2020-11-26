export default class FileDownloader {
  static downloadFileAsPdf(data, fileName) {
    return FileDownloader.downloadFileAs(data, 'application/pdf', fileName)
  }

  static downloadFileAs(data, type = 'text/plain', fileName = 'Download') {
    return new Promise((resolve, reject) => {
      try {
        if (data.constructor.name === 'File') {
          alert("It's a file")
          data.arrayBuffer().then((result) => {
            data = new Blob([result], { type: type })
            resolve(FileDownloader.downloadFile(data, fileName))
          })
        } else {
          alert("It's not a file, creating blob...")
          data = new Blob([data], { type: type })
          resolve(FileDownloader.downloadFile(data, fileName))
        }
      } catch (error) {
        alert(error)
        reject(error)
      }
    })
  }

  static downloadFile(blob, fileName) {
    alert('Iniciando download')
    var a = document.createElement('a')
    a.style.display = 'none'
    document.body.appendChild(a)

    var url = window.URL.createObjectURL(blob)
    a.href = url
    a.download = fileName
    a.click()
    window.URL.revokeObjectURL(url)
  }

  static base64ToArrayBuffer(base64) {
    var binaryString = window.atob(base64)
    var binaryLen = binaryString.length
    var bytes = new Uint8Array(binaryLen)
    for (var i = 0; i < binaryLen; i++) {
      var ascii = binaryString.charCodeAt(i)
      bytes[i] = ascii
    }
    return bytes
  }
}

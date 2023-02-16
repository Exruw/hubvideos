const fs = require("fs")
let fileRegex = /.mp4|.mov|.ogv|.webm|.flv|.vob|.ogv|.drc|.gifv|.mng|.avi|.mov|.qt|.mts|.m2ts|.ts|.wmv|.yuv|.rm|.rm|.rmv|.viv|.asf|.amv|.m4p|.m4v|.mpg|.mp2|.mpeg|.mpe|.mpv|.m2v|.m4v|.svi|.3gp|.3g2|.mxf|.roq|.nsv|.f4v|.f4vp|.f4a|.f4b/

exports.handler = function() {
  let files = []
  let dir = fs.readdirSync("/", { withFileTypes: true })
  
  dir.forEach((d) => {
    if (d.isFile() && d.name !== "README.md" && d.name !== "video-array.js" && d.name.toLowerCase().search(fileRegex) !== -1) {
      files.push(d.name)
    }
  })
  
  return {
    statusCode: 200,
    body: JSON.stringify(files),
  }
}

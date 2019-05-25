// Orginal Author: Max Yi-Hsun Chou <yihsunmaxchou@icloud.com>
// Orginal Github: https://github.com/maxchou415
//
// new blacklist provider: pb847693
//

const blocklist = ['蔡英文', '蔡總統']
const templateHtml = '<div><h1 style="padding: 30px; text-align: center;">空心菜已被隱藏！</h1></div>'

const contentFromPosts = document.querySelector('#contentArea')
const contentFromPages = document.querySelector('#pagelet_timeline_main_column')
const content = contentFromPosts || contentFromPages

function removeElems () {
  const articles = content.querySelectorAll(`div[id][role="article"]`)

  function hasSensitiveWordInBlocklist (article) {
    return blocklist.some((sensitiveWord) => article.innerHTML.includes(sensitiveWord))
  }

  articles.forEach(function (article) {
    if (hasSensitiveWordInBlocklist(article)) {
      article.innerHTML = templateHtml
    }
  })
}

content.addEventListener('DOMContentLoaded', function (event) {
  removeElems()
})

content.addEventListener('DOMNodeInserted', function (event) {
  removeElems()
})

content.addEventListener('DOMSubtreeModified', function (event) {
  removeElems()
})

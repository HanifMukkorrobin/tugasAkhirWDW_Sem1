function expandCollapse(titleId, contentId) {
  var content = document.getElementById(contentId);
  var title = document.getElementById(titleId);
  console.log(content.classList);
  if (content.classList.contains('hidden')) {
    content.classList.remove('hidden');
    title.classList.add('text-primary');
  } else {
    content.classList.add('hidden');
    title.classList.remove('text-primary');
  }
}
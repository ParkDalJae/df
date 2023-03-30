const postForm = document.getElementById('post-form');
const postsDiv = document.getElementById('posts');

postForm.addEventListener('submit', event => {
  event.preventDefault();
  const authorInput = document.getElementById('author');
  const messageInput = document.getElementById('message');
  const author = authorInput.value;
  const message = messageInput.value;
  const post = document.createElement('div');
  post.classList.add('post');
  post.innerHTML = `
    <h3>${author}</h3>
    <p>${message}</p>
  `;
  postsDiv.prepend(post);
  authorInput.value = '';
  messageInput.value = '';
});

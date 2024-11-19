import 'bootstrap/dist/css/bootstrap.min.css';
import watchedState from './model';
import { render } from './view';
import validateUrl from './validation';

const elements = {
  form: document.querySelector('#rss-form'),
  input: document.querySelector('#rss-input'),
  feedback: document.querySelector('.feedback'),
};

const state = watchedState;

elements.form.addEventListener('submit', (e) => {
  e.preventDefault();

  const url = elements.input.value.trim();
  const existingUrls = state.feeds.map((feed) => feed.url);

  state.form.state = 'idle';
  state.form.errors = null;

  validateUrl(url, existingUrls)
    .then(() => {
      state.form.state = 'valid';
      state.feeds.push({ url });
    })
    .catch((error) => {
      state.form.state = 'invalid';
      state.form.errors = error.message;
    });
});

render(state, elements);

import onChange from 'on-change';

const state = {
  feeds: [], // Список RSS-фидов
  form: {
    state: 'idle', // idle, valid, invalid
    errors: null, // Сообщения об ошибках
  },
};

const watchedState = onChange(state, (path, value) => {
  console.log(`State updated: ${path} ->`, value);
});

export default watchedState;

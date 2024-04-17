function ShowPostPage({currentPost, onChangeHandler, onDelete}) {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__img"></div>
        <div className="post__author">Автор поста {currentPost.created}</div>
      </div>
      <div className="post__content">{currentPost.content}</div>
      <div>
        <button id={currentPost.id} onClick={onChangeHandler}>
          Изменить
        </button>
        <button id={currentPost.id} onClick={onDelete}>
          Удалить
        </button>
        </div>
    </div>
  )
}

export default ShowPostPage;
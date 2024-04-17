import { useNavigate } from "react-router-dom";

function ChangePostPage({currentPost, onChange}) {
  const navigate = useNavigate();

  const changePost = (event: FormEventHandler<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target;
    const formData = {
      id: currentPost.id,
      content: target.content.value,
    };


    const postData = async (url: string, formData: any) => {
      try {
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(formData),
        })
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error: ' + error.message);
      } 
    }
    postData('http://localhost:7070/posts', formData);
    onChange();
    navigate('/');  
  }

  return (
    <form className="post" onSubmit={changePost}>

      <div className="post__header">Редактировать публикацию</div>
      <div>
        <div className="post__img"></div>
        <div className="form-item">
            <label id="content"></label>
            <textarea id="content" className="form__input">{currentPost.content}</textarea>
          </div>
      </div>
      <button>Сохранить</button>
    </form>
  )
}

export default ChangePostPage;
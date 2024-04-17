import { FormEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IForm {
  content: string;
}

export default function NewPost() {

  const navigate = useNavigate();

  const [form, setForm] = useState<IForm>({
    content: ''
  })
  const createPost = (event: FormEventHandler<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target;
    const formData = {
      content: target.content.value,
    };

    setForm({content: formData.content});

    const postData = async (url: string, formData: IForm) => {
      try {
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(formData),
        })
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error: ' + error.message);
      } 
    }
    postData('http://localhost:7070/posts', formData);

    navigate('/');  
  }

  return(
    <div className='new-post'>
      <form className="form" onSubmit={createPost}>
        <div className="form__header">
          <div>Публикация</div>
          <div>Фото/Видео</div>
          <div>Прямой эфир</div>
          <div>Еще</div>
        </div>
        <div className="form__content">
          <div className="new-post__image"></div>
          <div className="form-item">
            <label id="content"></label>
            <textarea id="content" className="form__input"></textarea>
          </div>
        </div>
        <button type="submit">Опубликовать</button>
      </form>
    </div>
  )
}
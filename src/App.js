import { useForm } from 'react-hook-form'
import './main.css'

function App() {

  const {
    register,
    formState: {
      errors,
      isValid
    },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur'
  })

  const onSubmit = (data) => {
    console.log(data)
    reset()
  }

  return (
    <div className='form'>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div>
          <label>
            name:
            <input 
            {...register('firstname', {
              required: 'Здесь пусто!',
              minLength: {
                value: 5,
                message: 'Слишком мало символов. Минимальная длина 5'
              }
              })}/>
            <div>{errors?.firstname && <p>{errors?.firstname.message || 'Неизвестная ошибка!'}</p>}</div>
          </label>
        </div>


        <div>
          <input type='submit'
          disabled={!isValid}/>
        </div>

      </form>
    </div>
  );
}
export default App;

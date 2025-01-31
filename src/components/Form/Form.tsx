import { useState, ChangeEvent, FormEvent } from "react";
import { SearchType } from "../../types";
import { countries } from "../../data/countries";
import styles from './Form.module.css'
import Alert from "../../Alert/Alert";


export type FormProps = {
    fetchWeather: (search: SearchType) => Promise<void>
}

export default function Form({fetchWeather} : FormProps) {

  const [search, setSearch] = useState<SearchType>({
    city: '',
    country: ''
  })

  const [alert, setAlert] = useState('')


  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        })
  }

  const handleSumit  = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(Object.values(search).includes('')){
        setAlert('Todos los campos son obligatorios')
        return
    }
    fetchWeather(search)
  }

  return (
    <form className={styles.form}
          onSubmit={handleSumit}
    >
        {alert && <Alert>{alert}</Alert>}
        <div className={styles.field}>
            <label htmlFor="city">Ciudad:</label>
            <input 
                type="text"
                id= "city"
                name= "city"
                placeholder="ciudad"
                value={search.city}
                onChange={handleChange}
            />
        </div>

        <div className={styles.field}>
            <label htmlFor="country">Pais:</label>
            <select 
                name="country" 
                id="country" 
                value={search.country}
                onChange={handleChange}
            >
                <option value="" disabled>-- Seleccione un pais --</option>
                {countries.map(country => (
                    <option
                        key={country.code}
                        value={country.code}
                    >
                        {country.name}
                    </option>
                ) )}
            </select>
        </div>
        <input className={styles.submit} type="submit" value='Consultar Clima' />
    </form>
  )
}

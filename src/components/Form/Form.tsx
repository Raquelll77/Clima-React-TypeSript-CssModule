import { countries } from "../../data/countries";
import styles from './Form.module.css'


export default function Form() {
  return (
    <form className={styles.form}>
        <div className={styles.field}>
            <label htmlFor="city">Ciudad:</label>
            <input 
                type="text"
                id= "city"
                name= "city"
                placeholder="ciudad"
            />
        </div>

        <div className={styles.field}>
            <label htmlFor="pais">Pais:</label>
            <select name="" id="">
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

import { countries } from "../../data/countries";

export default function Form() {
  return (
    <form>
        <div className="">
            <label htmlFor="city">Ciudad:</label>
            <input 
                type="text"
                id= "city"
                name= "city"
                placeholder="ciudad"
            />
        </div>

        <div className="">
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
    </form>
  )
}

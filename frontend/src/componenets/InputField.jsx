

export default function InputField(props) {
  return (
    <div className="inputWrapper flex flex-col w-full gap-2 ">
                <label htmlFor="name" className="text-xl">{props.data.label}</label>
                <input required type={props.data.type} name={props.data.name} id={props.data.name} placeholder={props.data.placeholder} className="text-lg py-3 px-3 bg-gray-100 rounded-sm focus:outline-none transition duration-700  focus:border-blue-700 focus:border focus:bg-white" />
    </div>
  )
}

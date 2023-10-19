export default function GeneralInformation({ onChange, generalInformation }) {
  return (
    <form>
      <h3 className="title">General Information</h3>
      <div className="input-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Name"
          id="fullName"
          onChange={onChange}
          value={generalInformation.fullName}
        />
      </div>
      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email address"
          id="email"
          onChange={onChange}
          value={generalInformation.email}
        />
      </div>
      <div className="input-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          placeholder="Phone Number"
          id="phone"
          onChange={onChange}
          value={generalInformation.phone}
        />
      </div>
      <div className="input-group">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          placeholder="address"
          id="address"
          onChange={onChange}
          value={generalInformation.address}
        />
      </div>
    </form>
  )
}

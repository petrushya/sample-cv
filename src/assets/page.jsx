export default function Page({ data }) {

  return (
    <section className="max-width-80">
      <h2>Sample page for &ldquo;{data.nickname}&rdqou;</h2>
      <hr />
      <dl>
        <h2>{data.person.firstName + ' ' +
          data.person.lastName}</h2>
        <dt><h3>Education</h3></dt>
        <dd>
          <b>Scool name:</b> &ldquo;{data.education.scool}&rdquo;<br />
          <b>Title of study:</b> {data.education.title}<br />
          <b>Programming skills:</b> {data.education.scills}<br />
          <b>Date of study:</b> {'from ' + data.education.startEduc + ' to '
          + (data.education.endEduc !== ''
          ? data.education.endEduc : 'the present')}
        </dd>
        <dt><h3>Practical experience</h3></dt>
        <dd>
          <b>Company name:</b> &ldquo;{data.experience.company}&rdquo;<br />
          <b>Position title:</b> {data.experience.position}<br />
          <b>Main responsibilities:</b> {data.experience.duty}<br />
          <b>Dates of work:</b> {'from ' + data.experience.startWork + ' to '
          + (data.experience.endWork !== ''
            ? data.experience.endWork : 'the present')}
        </dd>
        <dt><h3>Contacts</h3></dt>
        <dd>
          <b>Phone:</b> {data.person.tel}<br />
          <b>Email:</b> {data.person.email}
        </dd>
      </dl>
    </section>
  )
}
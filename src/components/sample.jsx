export default function Page({ data }) {

  return (
    <section className="max-width-80">
      <h2>Sample page</h2>
      <hr />
      <dl>
        <h2>{data.name + ' ' +
          data.surname}</h2>
        <dt><h3>Education</h3></dt>
        <dd>
          <b>Scool name:</b> &ldquo;{data.scool}&rdquo;<br />
          <b>Title of study:</b> {data.title}<br />
          <b>Programming skills:</b> {data.scills}<br />
          <b>Date of study:</b> {'from ' + data.startStudy + ' to '
          + (data.endStudy !== ''
          ? data.endStudy : 'the present')}
        </dd>
        <dt><h3>Practical experience</h3></dt>
        <dd>
          <b>Company name:</b> &ldquo;{data.company}&rdquo;<br />
          <b>Position title:</b> {data.position}<br />
          <b>Main responsibilities:</b> {data.duties}<br />
          <b>Dates of work:</b> {'from ' + data.startWork + ' to '
          + (data.endWork !== ''
            ? data.endWork : 'the present')}
        </dd>
        <dt><h3>Contacts</h3></dt>
        <dd>
          <b>Phone:</b> {data.tel}<br />
          <b>Email:</b> {data.email}
        </dd>
      </dl>
    </section>
  )
}
export default function Page({ data, person, educ, expert }) {
  const personData = (() => (data.name ? data : person))();
  const educData = (() => (data.education.school ? data.education : educ))();
  const expertData = (() =>
    data.experience.company ? data.experience : expert)();

  return (
    <>
      <section className="e-flx aln-d jst-bw pdn-bl pdn-ln bdr-bt">
        <h2 className="pdn-bl mrn-bt txt-lt">
          <em>{personData.name + " " + personData.surname}</em>
        </h2>
        <table>
          <tbody>
            <tr>
              <th>Email:</th>
              <td>
                <em>{personData.email}</em>
              </td>
            </tr>
            <tr>
              <th>Phone:</th>
              <td>
                <em>{personData.phone}</em>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="e-flx dir-cl pdn-ln bdr-bt">
        <h3 className="pdn-bl">Education</h3>
        {educData.map((item, index) => (
          <div key={index + "sample"} className="bdr-t pdn-bl dw-100">
            <div className="e-flx aln-t jst-bw mrn-bt">
              <span className="fnt-lsz txt-lt">
                <em>"{item.school}"</em>
              </span>
              <span className="txt-rt">
                Training from {item.startStudy || '" "'}<br />to{" "}
                {item.endStudy || "the present"}
              </span>
            </div>
            <div className="e-flx dir-cl aln-t txt-lt">
              <span className="mrn-bt">
                Title of the study: <em className="fnt-lsz">"{item.title}"</em>.
              </span>
              <span className="mrn-bt">
                Main skills: <em className="fnt-lsz">{item.skills}</em>.
              </span>
            </div>
          </div>
        ))}
      </section>
      <section className="e-flx dir-cl pdn-ln bdr-bt">
        <h3 className="pdn-bl">Experience</h3>
        {expertData.map((item, index) => (
          <div key={index + "sample"} className="bdr-t pdn-bl dw-100">
            <div className="e-flx aln-t jst-bw mrn-bt">
              <span className="fnt-lsz txt-lt">
                <em>"{item.company}"</em>
              </span>
              <span className="txt-rt">
                Worked from {item.startWork || '" "'}<br />to{" "}
                {item.endWork || "the present"}
              </span>
            </div>
            <div className="e-flx dir-cl aln-t txt-lt">
              <span className="mrn-bt">
                Position title: <em className="fnt-lsz">"{item.position}"</em>.
              </span>
              <span className="mrn-bt">
                Responsibilities: <em className="fnt-lsz">{item.duties}</em>.
              </span>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

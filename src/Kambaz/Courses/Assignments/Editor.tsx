export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" />
        <br />
        <br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page
          of your Web application running on Netlify. The landing page should
          include the following: Your full name and section Links to each of the
          lab assignments Link to the Kanbas application Links to all relevant
          source code repositories The Kanbas application should include a link
          to navigate back to the landing page.
        </textarea>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              </select>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option value="Percentage">Percentage</option>
              </select>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option value="Online">Online</option>
              </select>
            </td>
          </tr>
          <br />
          <tr>
            <td></td>
            <td align="left" valign="top">
              <label>Online Entry Options</label>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <input type="checkbox" id="wd-text-entry-text" />
            </td>
            <label htmlFor="wd-text-entry-text">Text Entry</label>
          </tr>
          <tr>
            <td align="right" valign="top">
              <input type="checkbox" id="wd-text-entry-url" />
            </td>
            <label htmlFor="wd-text-entry-url">Website URL</label>
          </tr>
          <tr>
            <td align="right" valign="top">
              <input type="checkbox" id="wd-text-entry-media" />
            </td>
            <label htmlFor="wd-text-entry-media">Media Recording</label>
          </tr>

          <tr>
            <td align="right" valign="top">
              <input type="checkbox" id="wd-text-entry-student" />
            </td>
            <label htmlFor="wd-text-entry-student">Student Annotation</label>
          </tr>

          <tr>
            <td align="right" valign="top">
              <input type="checkbox" id="wd-text-entry-file" />
            </td>
            <label htmlFor="wd-text-entry-file">File Uploads</label>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign to</label>
            </td>
            <input id="wd-assign-to" value="Everyone" />
          </tr>
          <br />
            <tr>
                <td align="right" valign="top">
                    <label htmlFor="wd-due-date">Due</label> <br/>
                </td>
                    <input type="date" id="wd-due-date" value="2024-05-13"/>
            </tr>
            <br/>
            <tr>
                <td></td>
            <td>
              <label htmlFor="wd-available-from">Available from</label>
              <br />
              <input type="date" id="wd-available-from" value="2024-05-06" />
            </td>
            <td>
              <label htmlFor="wd-available-until">Until</label> <br />
              <input type="date" id="wd-available-until" value="2024-05-28" />
            </td>
          </tr>
          <br />
        </table>
        <button>Cancel</button>
        <button>Save</button>
      </div>
    );
}

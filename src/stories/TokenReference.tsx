import { COLOUR_TOKENS, TOKEN_ROWS, componentsByToken } from './tokenTable';

// Tables for the "Design Tokens" docs page. The data is in `tokenTable.ts`
// and is checked against the component sources by
// `src/utils/token-table.test.ts`. Styled by the <style> block in
// DesignTokens.mdx (the .ref-* classes).

/** One row per component: the tokens it reads, and the colours no token reaches. */
export const ComponentTokenTable = () => (
  <div className="ref-scroll">
    <table className="ref-table">
      <thead>
        <tr>
          <th scope="col">Component</th>
          <th scope="col">Tokens it reads, with the utilities that read them</th>
          <th scope="col">Fixed colours (no token)</th>
        </tr>
      </thead>
      <tbody>
        {TOKEN_ROWS.map((row) => (
          <tr key={row.component}>
            <th scope="row">
              <span className="ref-component">{row.component}</span>
              {row.note && <span className="ref-note">{row.note}</span>}
            </th>
            <td>
              {COLOUR_TOKENS.filter((token) => row.reads[token]).map((token) => (
                <div className="ref-line" key={token}>
                  <span className="ref-token">{token}</span>
                  {[...new Set(row.reads[token])].map((entry) => (
                    <code key={entry}>{entry}</code>
                  ))}
                </div>
              ))}
            </td>
            <td>
              {row.fixed?.map((entry) => (
                <code key={entry}>{entry}</code>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

/** The same data turned around: override a token, see who else changes. */
export const TokenUsageIndex = () => {
  const byToken = componentsByToken();
  return (
    <div className="ref-scroll">
      <table className="ref-table">
        <thead>
          <tr>
            <th scope="col">Token</th>
            <th scope="col">Components that read it</th>
          </tr>
        </thead>
        <tbody>
          {COLOUR_TOKENS.map((token) => (
            <tr key={token}>
              <th scope="row">
                <code>--color-{token}</code>
              </th>
              <td>{byToken[token].join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

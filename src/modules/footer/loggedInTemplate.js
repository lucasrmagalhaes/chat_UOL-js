export const loggedInTemplate = name => `
  <div class="footer-user">
    <input type="hidden" value="${name}" id="username"/>
    <span />${name}</span>
  </div>
`;

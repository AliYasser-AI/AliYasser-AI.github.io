export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
  lede: string;
  sections: BlogSection[];
  takeaways?: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "actionable-pentest-finding",
    category: "PENETRATION TESTING / REPORT WRITING",
    readTime: "4 MIN READ",
    title: "What Makes a Pentest Finding Actionable?",
    excerpt:
      "A strong report helps a team understand what was tested, what the evidence proves, why it matters, and how to reduce the risk.",
    lede: "A vulnerability title is not a handoff. The handoff is the part that lets another person verify the problem and decide what to do about it.",
    sections: [
      {
        heading: "Name the boundary that failed",
        paragraphs: [
          "A useful finding starts with the affected asset and the security boundary that did not behave as intended. “Broken access control” gives a category; it does not tell the owner which resource, role, or decision needs attention.",
          "Describe the conditions that matter. Who was authenticated? What resource was in scope? Which permission or assumption should have stopped the behavior? Specific context makes a report easier to route to the right engineer and much harder to misunderstand.",
        ],
      },
      {
        heading: "Evidence beats theatrics",
        paragraphs: [
          "The goal is not to make a report sound dramatic. It is to make the conclusion easy to check. Record the smallest set of observations that demonstrates the issue, then separate what you observed from what you infer about its wider impact.",
          "That distinction protects both sides. A tester who labels an assumption as a fact can send a team down the wrong path; an owner who can repeat the observation has a concrete place to start. If a test constraint prevented confirmation, say so plainly.",
        ],
      },
      {
        heading: "Severity needs a reason",
        paragraphs: [
          "A score is useful shorthand, not an explanation. Technical severity should be connected to the affected data, privilege, or business process. A moderate issue on a critical boundary may deserve a different conversation from the same weakness on an isolated test asset.",
          "Give the reader enough context to understand the rating: preconditions, likely impact, and the scope of the evidence. Avoid implying a broader compromise than the assessment actually established.",
        ],
      },
      {
        heading: "Make the fix legible",
        paragraphs: [
          "A remediation recommendation should point toward the control that needs to change. That might mean enforcing authorization on the server, validating an input at the right trust boundary, or tightening a deployment configuration. The advice should be specific enough to guide a fix without pretending every system has the same architecture.",
          "When practical, mention what a regression check should confirm. This turns the report from a one-time description into a small piece of maintenance guidance the team can keep after the test ends.",
        ],
      },
    ],
    takeaways: [
      "Name the affected asset and the control boundary.",
      "Separate observed evidence from inferred impact.",
      "Explain why the severity fits the context.",
      "Give the owner a practical remediation direction.",
    ],
  },
  {
    slug: "four-questions-before-reporting",
    category: "BUG BOUNTY / RESPONSIBLE TESTING",
    readTime: "3 MIN READ",
    title: "Four Questions Before You Report a Vulnerability",
    excerpt:
      "A short quality check can make a disclosure clearer, safer, and more useful to the team responsible for the system.",
    lede: "Before a finding leaves your notes, make sure the claim is smaller than—or exactly as large as—the evidence that supports it.",
    sections: [
      {
        heading: "Is the target actually in scope?",
        paragraphs: [
          "It sounds obvious, but scope is part of the technical problem. Programs can distinguish between production and staging, first-party services and vendors, or permitted and prohibited test methods. A hostname that looks related is not permission by itself.",
          "Read the program rules before testing, and keep a record of the asset and method you relied on. If ownership or scope is unclear, stop and ask through the approved channel rather than guessing.",
        ],
      },
      {
        heading: "Can you validate it without causing avoidable harm?",
        paragraphs: [
          "A result should be repeatable, but repetition is not an excuse to create impact. Use the least intrusive evidence that demonstrates the security boundary failure. Do not access data you do not need, alter another user’s state, or continue once the impact is clear.",
          "Where a program provides test accounts or a verification process, use it. The point is to establish the behavior, not to see how far it can be pushed.",
        ],
      },
      {
        heading: "What does the evidence prove—and what does it not?",
        paragraphs: [
          "A strong report names the preconditions and the observable result. It does not turn a plausible consequence into a confirmed compromise. If you verified exposure of one resource, report that evidence accurately; do not imply access to an entire account or tenant unless that was established within scope.",
          "This is where a clean timeline, relevant request and response context, and a short explanation of the expected behavior help more than a large attachment of unexplained output.",
        ],
      },
      {
        heading: "Will the owner know what to change?",
        paragraphs: [
          "Close with a remediation direction tied to the underlying control, then explain what would demonstrate that the fix works. The owner may choose a different implementation, but the security property that needs to hold should be clear.",
          "A precise, modest report earns trust. It helps the program triage quickly, protects the system during validation, and gives both sides a shared definition of done.",
        ],
      },
    ],
    takeaways: [
      "Confirm asset and method are explicitly in scope.",
      "Use the least intrusive validation that proves the issue.",
      "State preconditions and limits without overstating impact.",
      "Describe the security property the remediation must restore.",
    ],
  },
  {
    slug: "report-survives-handoff",
    category: "PENTEST METHODOLOGY / DELIVERY",
    readTime: "7 MIN READ",
    title: "A Pentest Report Should Survive the Handoff",
    excerpt:
      "The meeting ends. The tester moves on. The engineer still has to decide whether the fix is safe to ship.",
    lede: "Six weeks after an assessment, nobody remembers every detail of the closing call. What remains is a ticket, a report, and a decision that still has to be made.",
    sections: [
      {
        heading: "A report has more than one reader",
        paragraphs: [
          "The application engineer wants to know where the control failed and how to reproduce it. The security lead needs to understand the exposure and whether similar systems are affected. A compliance stakeholder may need a plain account of the risk and the evidence supporting it. These readers are not asking for three different findings; they are trying to make three different decisions about the same one.",
          "That is why a report should not read like the tester’s diary. The chronology of discovery is rarely the best way to explain the result. Lead with the affected asset and security property, then make the supporting detail available to the person who needs to verify the behavior. A clean structure respects the reader’s time without flattening the technical substance.",
          "This matters in bug bounty as much as in a formal engagement. A program owner may be triaging dozens of submissions while an engineering team is trying to reproduce one. If the important conditions are scattered between screenshots, an executive summary, and a long narrative, the report is asking its audience to do the tester’s organizing work.",
        ],
      },
      {
        heading: "Make the reasoning visible",
        paragraphs: [
          "A finding is an argument. It begins with an expectation: a user in one role should not be able to perform an action on a resource outside that role. The test produces an observation. The tester explains why the observation violates the expectation and what risk follows. The report should let another person inspect every step in that reasoning.",
          "“Security misconfiguration” is a useful label, but not a conclusion. Which asset was exposed? Which control was expected to restrict it? What evidence showed the control was absent or ineffective? If the observation supports a limited claim, keep the claim limited. A report becomes less credible—not more important—when the final sentence reaches beyond what the test established.",
          "Separate confirmed facts from interpretation. If a test account could access one controlled record, say that. If the same pattern might affect other records but was not examined, mark it as an unanswered scope question. Readers can work with uncertainty when it is named; they cannot make a sound decision when uncertainty is disguised as certainty.",
        ],
      },
      {
        heading: "CVSS is a coordinate, not the whole map",
        paragraphs: [
          "A severity score is a useful common reference, and a report should use it consistently. But a number cannot describe the business process around the affected system, the sensitivity of its data, or how the organization actually uses the asset. A score printed in bold is not a remediation plan.",
          "Give the reader enough context to understand why the score fits. State the meaningful preconditions, the confirmed impact, and any limitation that affects the rating. If the affected asset supports a regulated financial workflow, say what role or information is implicated when that is established. Do not substitute a dramatic hypothetical for evidence; the stronger argument is usually the narrower one that survives scrutiny.",
        ],
      },
      {
        heading: "Give the fix a finish line",
        paragraphs: [
          "“Apply proper access control” is true and nearly useless. The team needs to know which security property must hold after the change. For an authorization weakness, that may mean the server evaluates the authenticated principal, requested action, and target object together. For a configuration issue, it may mean removing an unnecessary exposure or enforcing a safer default. The implementation belongs to the owner; the required outcome should be precise.",
          "A useful recommendation also suggests how to verify the change. Retest the original condition, then consider the nearest neighboring path that shares the same assumption: another role, another operation, or a second interface to the same resource. This is not a demand for an endless audit. It is a way to avoid closing one ticket while leaving the underlying policy untouched.",
          "If a fix has trade-offs, write them down. There may be a reason an application chose a particular flow or a legacy system cannot change its behavior overnight. The report can still state the risk, the security property to restore, and any compensating control that would reduce exposure in the meantime.",
        ],
      },
      {
        heading: "The handoff is part of the test",
        paragraphs: [
          "A report has done its job when the next person can explain what failed, what is known, what remains uncertain, and what evidence would show the risk is reduced. That is a higher bar than a polished PDF. It is also a practical one: less time spent reconstructing the test means more time spent fixing the system.",
          "The tester will eventually leave the room. The reasoning should not leave with them.",
        ],
      },
    ],
  },
  {
    slug: "bola-object-model-not-endpoint",
    category: "WEB & API SECURITY / ACCESS CONTROL",
    readTime: "8 MIN READ",
    title: "BOLA Starts with the Object Model, Not the Endpoint",
    excerpt:
      "An API can authenticate every request and still return an object to the wrong principal. The boundary is in the relationship, not the route name.",
    lede: "An endpoint can be authenticated, rate-limited, and neatly documented—and still hand the wrong account somebody else’s object.",
    sections: [
      {
        heading: "Authentication is not authorization",
        paragraphs: [
          "A valid session answers one question: which principal is making this request? It does not answer whether that principal may read, update, export, or delete the object named in the request. Broken object-level authorization lives in the gap between those questions.",
          "The route can look perfectly reasonable. The user is signed in. The request is well-formed. The identifier belongs to a real record. The failure is in the relationship the server did—or did not—check: principal, action, object, and the context that connects them. That is why searching only for odd-looking endpoints misses the design problem.",
          "I find it useful to write that relationship down before testing variations. Is access based on ownership, team membership, tenant, delegated role, or some combination? Which operations are allowed for each relationship? The answer is the test model. Without it, an assessor can collect a long list of responses and still be unsure what rule the application meant to enforce.",
        ],
      },
      {
        heading: "Build a small matrix before a large test",
        paragraphs: [
          "A controlled matrix can be simple: identify two test principals with different expected access, choose test objects whose ownership is known, and list the actions that should be permitted or denied. Read and update may have different rules; exporting a report may differ from viewing it; an organization administrator may not be an administrator in every tenant.",
          "The point is not to create a spreadsheet for its own sake. It is to make the expected decision explicit before observing the application. A handful of carefully selected cases often tells you more than changing a long sequence of object identifiers and recording every response.",
          "Keep the exercise inside an authorized scope and use test data. If the program provides dedicated accounts or a verification process, use them. The evidence should establish whether the policy is inconsistent—not expose another person’s data or alter a real user’s state just to make the finding look stronger.",
        ],
      },
      {
        heading: "Look where the product changes context",
        paragraphs: [
          "Authorization bugs tend to cluster around transitions. A resource moves from one owner to another. A user belongs to more than one organization. A background export runs under a service identity. A mobile client and a web client reach the same API through different flows. A bulk operation applies one permission check to many objects. Those edges are worth asking about because the identity-to-object relationship is changing, not because a particular URL pattern is inherently suspicious.",
          "The client interface is not the policy. Hiding a button, removing an identifier from a page, or making an ID difficult to guess does not establish that the server checked permission. The test is whether the backend enforces the intended relationship when the request arrives through any supported path.",
          "This is also where a narrow test can reveal a broad design question. If the same object model is used by several operations, a validated issue may justify asking whether the policy is shared. It does not justify claiming every operation is vulnerable before those paths have been assessed.",
        ],
      },
      {
        heading: "Prove only what you need to prove",
        paragraphs: [
          "A report should demonstrate the failure with the smallest useful piece of evidence. A harmless marker record is often enough to show that one test principal received an object it should not have received. Explain the known ownership, expected decision, observed result, and affected action. There is rarely a good reason to copy sensitive content into a report when a controlled test object can establish the same boundary failure.",
          "Be careful with scope in the final claim. One confirmed read is one confirmed read. A cross-tenant pattern may be suspected, but if only one controlled case was tested, say that—and identify what further authorized validation would settle the question. That kind of precision helps the owner reproduce the issue without turning a bounded finding into an unsupported incident narrative.",
        ],
      },
      {
        heading: "Fix the relationship, not the identifier",
        paragraphs: [
          "The durable answer is a server-side authorization decision that evaluates the authenticated principal, the requested action, and the target object. The application should not rely on a client-controlled owner field, a hidden interface element, or the secrecy of an identifier. The specific implementation depends on the system; the security property does not.",
          "Regression coverage should include the adjacent roles and operations that share the same object model. A corrected read endpoint does not prove that an export or update path follows the same rule. Close the loop by testing the original boundary and its nearest neighbors, then describe exactly what was rechecked. That is how an API finding turns into a policy the product can keep.",
        ],
      },
    ],
    takeaways: [
      "Model principal, action, object, and context before testing variants.",
      "Use controlled identities and test data within explicit scope.",
      "Demonstrate the boundary failure with minimal evidence.",
      "Recommend server-side policy and regression checks for neighboring operations.",
    ],
  },
  {
    slug: "active-directory-assessment-paths-not-checklists",
    category: "ACTIVE DIRECTORY / RED TEAM METHODOLOGY",
    readTime: "7 MIN READ",
    title: "An Active Directory Assessment Is About Paths, Not Checklists",
    excerpt:
      "A collection of individual weaknesses says less than the relationships that connect an account, a host, and a privilege boundary.",
    lede: "An AD graph can look like certainty. It is only a map of relationships; the assessor still has to establish which paths are real, relevant, and in scope.",
    sections: [
      {
        heading: "A directory is a model of trust",
        paragraphs: [
          "Accounts, groups, computers, service identities, delegation, and permissions are not separate checklist items. They are the relationships that determine what one identity can reach and change. A configuration that seems modest on its own can matter when it connects a common account to a sensitive host or a privileged group.",
          "That is the difference between inventory and assessment. Inventory tells you what exists. Assessment explains which relationship changes risk, under what conditions, and for whom. The result should not be a longer list of directory objects; it should be a clearer account of the boundaries that hold and the ones that do not.",
        ],
      },
      {
        heading: "A graph edge is a hypothesis",
        paragraphs: [
          "BloodHound can make relationships easier to inspect and help an assessor see paths that are awkward to follow by eye. That is useful, but a highlighted path is not a verdict. The data may be stale. A permission may be inherited differently than expected. A step in the path may require access that the test account does not have, or a control may block the transition in practice.",
          "Treat the graph as a place to form a question, then validate the material conditions within the rules of engagement. Techniques associated with directory testing—Kerberoasting, pass-the-hash, DCSync—have different prerequisites and potential impact. Listing a technique in a report does not establish that it was possible in a specific environment. Evidence does.",
          "There is value in saying “the relationship suggests this path, but the final transition was not tested.” That sentence is not a concession. It tells the system owner where the evidence ends and lets them decide whether additional authorized validation is warranted.",
        ],
      },
      {
        heading: "Keep the boundary explicit",
        paragraphs: [
          "Directory testing can touch credentials and privileged systems that support a large part of the business. Before the work begins, the engagement should make clear which domains, accounts, hosts, and validation methods are authorized. A path that reaches beyond those limits is not an invitation to continue; it is a point to stop, preserve the evidence already gathered, and report the boundary question.",
          "This discipline protects the environment and the quality of the finding. Use the agreed accounts and validation methods, retain only the evidence needed to support the result, and avoid turning a test of access into unnecessary collection of secrets. A controlled assessment can still demonstrate serious exposure without making the exposure worse.",
        ],
      },
      {
        heading: "Report the shortest meaningful path",
        paragraphs: [
          "A useful report gives the owner the starting identity, the relevant permission or relationship, the boundary that can be crossed, and the impact the assessment actually established. Include the evidence needed for the technical team to review the path. Do not bury the central issue under every intermediate edge the tool displayed.",
          "Then connect the remediation to the cause: excessive privilege, weak delegation, an overpowered service identity, or an unmanaged local-administrator relationship each calls for a different review. After the change, retest the relationship that created the path and inspect its closest neighbors. Directory permissions are connected; removing one edge does not guarantee that the same trust assumption is absent elsewhere.",
          "The goal is not a graph with fewer lines for its own sake. It is a smaller, better-understood set of routes to privilege—and an owner who knows which change reduced the risk.",
        ],
      },
    ],
  },
];

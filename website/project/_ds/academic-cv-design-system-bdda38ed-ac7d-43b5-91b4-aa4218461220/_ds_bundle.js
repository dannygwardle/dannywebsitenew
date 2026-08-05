/* @ds-bundle: {"format":4,"namespace":"AcademicCVDesignSystem_bdda38","components":[{"name":"BulletList","sourcePath":"components/document/BulletList.jsx"},{"name":"DocMasthead","sourcePath":"components/document/DocMasthead.jsx"},{"name":"EntryHeader","sourcePath":"components/document/EntryHeader.jsx"},{"name":"PublicationEntry","sourcePath":"components/document/PublicationEntry.jsx"},{"name":"SectionHeader","sourcePath":"components/document/SectionHeader.jsx"},{"name":"Button","sourcePath":"components/ui/Button.jsx"},{"name":"Link","sourcePath":"components/ui/Link.jsx"},{"name":"Tag","sourcePath":"components/ui/Tag.jsx"}],"sourceHashes":{"components/document/BulletList.jsx":"79ab9d984a0f","components/document/DocMasthead.jsx":"ea98c19d2edb","components/document/EntryHeader.jsx":"3b6cc6a16e36","components/document/PublicationEntry.jsx":"67623d21557e","components/document/SectionHeader.jsx":"eb4a2429229b","components/ui/Button.jsx":"a55f663fd7e2","components/ui/Link.jsx":"34f948a4e4ca","components/ui/Tag.jsx":"1e02897cb899","ui_kits/academic_site/Site.jsx":"ad9f3486c94b","ui_kits/cv_document/CVDocument.jsx":"185339a0c99f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AcademicCVDesignSystem_bdda38 = window.AcademicCVDesignSystem_bdda38 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/document/BulletList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * BulletList — the academic itemize: tight rows, each led by a small
 * racing-green marker. Pass `items` (array) or `children` (<li> nodes).
 */
function BulletList({
  items,
  children,
  marker = '–',
  style,
  ...rest
}) {
  const rows = items ? items.map((it, i) => /*#__PURE__*/React.createElement(Row, {
    key: i,
    marker: marker
  }, it)) : React.Children.map(children, (c, i) => /*#__PURE__*/React.createElement(Row, {
    key: i,
    marker: marker
  }, c));
  return /*#__PURE__*/React.createElement("ul", _extends({
    style: {
      listStyle: 'none',
      margin: 'var(--space-2) 0 0',
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--gap-item)',
      ...style
    }
  }, rest), rows);
}
function Row({
  marker,
  children
}) {
  return /*#__PURE__*/React.createElement("li", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'baseline',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'var(--racing-700)',
      flex: 'none',
      fontWeight: 'var(--fw-bold)'
    }
  }, marker), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, children));
}
Object.assign(__ds_scope, { BulletList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/BulletList.jsx", error: String((e && e.message) || e) }); }

// components/document/DocMasthead.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DocMasthead — the centered CV head: name in the humanist sans (racing green),
 * with a letter-spaced contact line beneath. Items in `contact` are joined by
 * an em-dash separator; strings render plain, objects {label, href} as links.
 */
function DocMasthead({
  name,
  contact = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      textAlign: 'center',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-regular)',
      fontSize: 'var(--fs-name)',
      letterSpacing: 'var(--tracking-name)',
      lineHeight: 'var(--lh-tight)',
      color: 'var(--racing-700)'
    }
  }, name), contact.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--fs-small)',
      letterSpacing: '0.03em',
      color: 'var(--text-body)',
      marginTop: 'var(--space-3)'
    }
  }, contact.map((c, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)',
      margin: '0 0.6em'
    }
  }, "\u2014"), typeof c === 'object' && c.href ? /*#__PURE__*/React.createElement("a", {
    href: c.href,
    style: {
      color: 'var(--color-link)'
    }
  }, c.label) : /*#__PURE__*/React.createElement("span", null, typeof c === 'object' ? c.label : c)))));
}
Object.assign(__ds_scope, { DocMasthead });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/DocMasthead.jsx", error: String((e && e.message) || e) }); }

// components/document/EntryHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * EntryHeader — a two-column CV entry head: bold title left, bold date right,
 * with an optional institution / location detail line beneath. Mirrors the
 * \school and \job macros from the source LaTeX.
 */
function EntryHeader({
  title,
  date,
  subtitle,
  meta,
  italicSubtitle = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      marginTop: 'var(--gap-entry)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-ink)'
    }
  }, title), date != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-ink)',
      whiteSpace: 'nowrap'
    }
  }, date)), (subtitle != null || meta != null) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 'var(--space-4)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: italicSubtitle ? 'italic' : 'normal'
    }
  }, subtitle), meta != null && /*#__PURE__*/React.createElement("span", {
    style: {
      whiteSpace: 'nowrap',
      color: 'var(--text-muted)'
    }
  }, meta)));
}
Object.assign(__ds_scope, { EntryHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/EntryHeader.jsx", error: String((e && e.message) || e) }); }

// components/document/PublicationEntry.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PublicationEntry — a quoted talk / paper title above the list of venues
 * where it was presented. Matches the presentations block of the CV.
 */
function PublicationEntry({
  title,
  venues = [],
  quoted = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      marginTop: 'var(--gap-entry)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-ink)'
    }
  }, quoted ? `\u2018${title}\u2019` : title), venues.length > 0 && /*#__PURE__*/React.createElement(__ds_scope.BulletList, {
    items: venues
  }));
}
Object.assign(__ds_scope, { PublicationEntry });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/PublicationEntry.jsx", error: String((e && e.message) || e) }); }

// components/document/SectionHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SectionHeader — the racing-green section title with its full-measure rule.
 * The single most recognizable device in the academic-CV system.
 */
function SectionHeader({
  children,
  as = 'h2',
  accent = true,
  style,
  ...rest
}) {
  const Tag = as;
  const color = accent ? 'var(--racing-700)' : 'var(--text-ink)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      marginTop: 'var(--gap-section)',
      marginBottom: 'var(--gap-entry)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(Tag, {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-h2)',
      lineHeight: 'var(--lh-tight)',
      color,
      margin: 0
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      height: 'var(--rule-weight)',
      background: color,
      marginTop: '4px'
    }
  }));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/ui/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    fontSize: 'var(--fs-tiny)',
    padding: '0.4em 0.9em'
  },
  md: {
    fontSize: 'var(--fs-small)',
    padding: '0.55em 1.2em'
  },
  lg: {
    fontSize: 'var(--fs-body)',
    padding: '0.65em 1.5em'
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--racing-700)',
    color: 'var(--text-on-accent)',
    border: '1px solid var(--racing-700)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--racing-700)',
    border: '1px solid var(--racing-700)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--racing-700)',
    border: '1px solid transparent'
  },
  link: {
    background: 'transparent',
    color: 'var(--color-link)',
    border: '1px solid transparent'
  }
};

/**
 * Button — the system's action control. Humanist sans, near-square corners,
 * racing-green fill for primary. Hover deepens the green; press settles it.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  iconLeft,
  iconRight,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const base = VARIANTS[variant] || VARIANTS.primary;
  const hoverBg = variant === 'primary' ? 'var(--racing-900)' : variant === 'secondary' || variant === 'ghost' ? 'var(--racing-050)' : 'transparent';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: '0.02em',
      lineHeight: 1.1,
      borderRadius: 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)',
      ...SIZES[size],
      ...base,
      ...(hover && !disabled ? {
        background: variant === 'primary' ? hoverBg : hoverBg,
        borderColor: base.border.includes('racing') ? 'var(--racing-900)' : undefined
      } : null),
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ui/Button.jsx", error: String((e && e.message) || e) }); }

// components/ui/Link.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Link — the maroon hyperlink with the system's understated underline.
 * `subtle` drops the underline until hover; `plain` removes the maroon
 * for in-flow ink links.
 */
function Link({
  children,
  href = '#',
  variant = 'default',
  style,
  ...rest
}) {
  const color = variant === 'plain' ? 'var(--text-ink)' : 'var(--color-link)';
  const [hover, setHover] = React.useState(false);
  const showUnderline = variant === 'subtle' ? hover : true;
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      color: hover ? 'var(--color-link-hover)' : color,
      textDecoration: 'none',
      borderBottom: showUnderline ? `1px solid color-mix(in srgb, ${color} ${hover ? '60%' : '32%'}, transparent)` : '1px solid transparent',
      transition: 'color var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Link });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ui/Link.jsx", error: String((e && e.message) || e) }); }

// components/ui/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — a small label chip for areas of specialisation, keywords, memberships.
 * Square-ish, racing-green, two tones: soft fill or hairline outline.
 */
function Tag({
  children,
  tone = 'soft',
  style,
  ...rest
}) {
  const tones = {
    soft: {
      background: 'var(--racing-050)',
      color: 'var(--racing-700)',
      border: '1px solid var(--racing-100)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--racing-700)',
      border: '1px solid var(--racing-300)'
    },
    solid: {
      background: 'var(--racing-700)',
      color: 'var(--text-on-accent)',
      border: '1px solid var(--racing-700)'
    },
    maroon: {
      background: 'var(--maroon-100)',
      color: 'var(--maroon-700)',
      border: '1px solid color-mix(in srgb, var(--maroon-700) 18%, transparent)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-tiny)',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: '0.02em',
      lineHeight: 1,
      padding: '0.4em 0.7em',
      borderRadius: 'var(--radius-sm)',
      whiteSpace: 'nowrap',
      ...(tones[tone] || tones.soft),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ui/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/academic_site/Site.jsx
try { (() => {
/* Academic personal website (dannywardle.org) — a second product surface that
   renders the same CV content as a browsable homepage. Composed from the DS. */
const {
  SectionHeader,
  Tag,
  Link,
  Button,
  BulletList,
  PublicationEntry
} = window.AcademicCVDesignSystem_bdda38;
const NAV = ['Home', 'Research', 'Teaching', 'CV'];
function SiteHeader({
  page,
  setPage
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-5)',
      padding: 'var(--space-5) var(--space-6)',
      borderBottom: '1.5px solid var(--racing-700)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setPage('Home'),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      fontFamily: 'var(--font-sans)',
      fontWeight: 400,
      fontSize: 'var(--fs-display)',
      letterSpacing: '0.03em',
      color: 'var(--racing-700)'
    }
  }, "Danny Wardle"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      color: 'var(--text-muted)',
      fontSize: 'var(--fs-small)'
    }
  }, "Philosopher \xB7 Australian National University"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)'
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("button", {
    key: n,
    onClick: () => setPage(n),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '0 0 2px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-small)',
      fontWeight: page === n ? 700 : 400,
      color: page === n ? 'var(--racing-700)' : 'var(--text-muted)',
      borderBottom: '2px solid ' + (page === n ? 'var(--racing-700)' : 'transparent')
    }
  }, n))));
}
function Prose({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-loose)',
      color: 'var(--text-body)',
      margin: '0 0 var(--space-4)',
      maxWidth: '38em',
      ...style
    }
  }, children);
}
function Home({
  setPage
}) {
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Home"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      marginBottom: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/portrait.png",
    alt: "Pen sketch of Danny Wardle",
    style: {
      width: '168px',
      height: '168px',
      objectFit: 'cover',
      objectPosition: 'top',
      flex: 'none',
      border: '1px solid var(--border-rule)',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--paper)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: '300px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-name)',
      color: 'var(--racing-700)',
      letterSpacing: '0.02em',
      margin: '0 0 var(--space-2)',
      lineHeight: 1.05
    }
  }, "Danny Wardle"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      color: 'var(--text-muted)',
      fontSize: 'var(--fs-h3)',
      margin: '0 0 var(--space-3)'
    }
  }, "PhD Candidate, Australian National University"))), /*#__PURE__*/React.createElement(Prose, null, "I am a PhD candidate in philosophy at the ", /*#__PURE__*/React.createElement("strong", null, "Australian National University"), ", supervised by Nicholas Southwood. The aim of my research is a series of papers on social metaphysics \u2014 how social groups persist through change, and what it takes for a group to be located in space and time. From 2021\u20132024 I studied at the Australian Catholic University's now-disestablished Dianoia Institute of Philosophy, and before that took a Master of Philosophy at the ", /*#__PURE__*/React.createElement("strong", null, "University of Adelaide"), " with a thesis on the metaphysics of persistence, ", /*#__PURE__*/React.createElement("em", null, "Opening a Can of Spacetime Worms"), "."), /*#__PURE__*/React.createElement(Prose, null, "I am Convenor of the Australasian Association of Philosophy Postgraduate Committee, and I edit and manage the website for ", /*#__PURE__*/React.createElement(Link, {
    href: "https://sagacitymagazine.com.au"
  }, "Sagacity"), ", a venue for public philosophy by postgraduate students. I also write on public policy and politics \u2014 weekly at my Substack ", /*#__PURE__*/React.createElement(Link, {
    href: "https://plurality.substack.com"
  }, "Plurality of Words"), ", and on occasion for outlets like ", /*#__PURE__*/React.createElement(Link, {
    href: "https://jacobin.com/author/danny-wardle"
  }, "Jacobin"), "."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap',
      margin: 'var(--space-5) 0'
    }
  }, /*#__PURE__*/React.createElement(Tag, null, "Metaphysics"), /*#__PURE__*/React.createElement(Tag, null, "Philosophy of Language"), /*#__PURE__*/React.createElement(Tag, null, "Social Philosophy"), /*#__PURE__*/React.createElement(Tag, {
    tone: "outline"
  }, "Philosophy of Physics")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => setPage('Research')
  }, "Read my research"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setPage('CV')
  }, "Curriculum Vitae")));
}
function Research() {
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Research"
  }, /*#__PURE__*/React.createElement(SectionHeader, null, "Areas of Specialisation"), /*#__PURE__*/React.createElement(Prose, {
    style: {
      margin: 'var(--space-3) 0 0'
    }
  }, "Metaphysics, Philosophy of Language, Social Ontology."), /*#__PURE__*/React.createElement(SectionHeader, null, "Selected Presentations"), /*#__PURE__*/React.createElement(PublicationEntry, {
    title: "Making Sense of Temporary Memberlessness",
    venues: ['Social Ontology, Trinity College Dublin, August 2025.', 'AAP Conference, University of Queensland, July 2025.']
  }), /*#__PURE__*/React.createElement(PublicationEntry, {
    title: "Locating Groups",
    venues: ['Social Ontology, Duke University, July 2024.', 'Space, Time, and Location, University of Adelaide, July 2023.']
  }), /*#__PURE__*/React.createElement(PublicationEntry, {
    title: "Social Plenitude",
    venues: ['Social Ontology & Collective Intentionality, University of Vienna, August 2022.', 'AAP Conference, University of Waikato, July 2022.']
  }));
}
function Teaching() {
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Teaching"
  }, /*#__PURE__*/React.createElement(SectionHeader, null, "Teaching"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-tiny)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      margin: 'var(--space-4) 0 var(--space-2)'
    }
  }, "Australian Catholic University \xB7 Tutor"), /*#__PURE__*/React.createElement(BulletList, {
    items: ['Introduction to Ethics (2022)', 'Philosophy: The Big Questions (2022)', 'Theories of Human Nature (2021 & 2023)']
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-tiny)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      margin: 'var(--space-5) 0 var(--space-2)'
    }
  }, "University of Adelaide \xB7 Tutor"), /*#__PURE__*/React.createElement(BulletList, {
    items: ['Mind and World (2021)', 'Introduction to Logic (2020)']
  }));
}
function CVPage() {
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "CV",
    style: {
      textAlign: 'center',
      padding: 'var(--space-6) 0'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    accent: true,
    style: {
      textAlign: 'left'
    }
  }, "Curriculum Vitae"), /*#__PURE__*/React.createElement(Prose, {
    style: {
      maxWidth: 'none',
      textAlign: 'left'
    }
  }, "A full academic CV \u2014 education, presentations, grants, teaching, and service \u2014 is available as a typeset PDF, or you can browse the live document version."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Download CV (PDF)"), /*#__PURE__*/React.createElement("a", {
    href: "../cv_document/index.html",
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Open document viewer"))));
}
function Site() {
  const [page, setPage] = React.useState('Home');
  const Body = {
    Home,
    Research,
    Teaching,
    CV: CVPage
  }[page];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--paper-ivory)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(SiteHeader, {
    page: page,
    setPage: setPage
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      maxWidth: '720px',
      width: '100%',
      margin: '0 auto',
      padding: 'var(--space-7) var(--space-6)',
      boxSizing: 'border-box'
    }
  }, page === 'Home' ? /*#__PURE__*/React.createElement(Home, {
    setPage: setPage
  }) : page === 'CV' ? /*#__PURE__*/React.createElement(CVPage, null) : /*#__PURE__*/React.createElement(Body, null)), /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--border-rule)',
      padding: 'var(--space-4) var(--space-6)',
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--fs-small)',
      color: 'var(--text-muted)'
    }
  }, "\xA9 Danny Wardle"), /*#__PURE__*/React.createElement(Link, {
    href: "mailto:dannygeorgewardle@gmail.com",
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--fs-small)'
    }
  }, "dannygeorgewardle@gmail.com"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Link, {
    href: "https://philpeople.org/profiles/danny-wardle",
    variant: "subtle",
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--fs-small)'
    }
  }, "PhilPeople"), /*#__PURE__*/React.createElement(Link, {
    href: "https://twitter.com/maximalworm",
    variant: "subtle",
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--fs-small)'
    }
  }, "Twitter"), /*#__PURE__*/React.createElement(Link, {
    href: "https://www.linkedin.com/in/danny-wardle-7a439616a/",
    variant: "subtle",
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--fs-small)'
    }
  }, "LinkedIn")));
}
window.Site = Site;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/academic_site/Site.jsx", error: String((e && e.message) || e) }); }

// ui_kits/cv_document/CVDocument.jsx
try { (() => {
/* CVDocument — faithful HTML recreation of the academic CV (Danny Wardle),
   built from the design-system document primitives. Real content from resume.tex. */
const {
  DocMasthead,
  SectionHeader,
  EntryHeader,
  BulletList,
  PublicationEntry
} = window.AcademicCVDesignSystem_bdda38;
function PlainRow({
  left,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-body)'
    }
  }, left), right != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-ink)',
      whiteSpace: 'nowrap'
    }
  }, right));
}
function SubLabel({
  children,
  italic
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-tiny)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginTop: 'var(--space-4)',
      marginBottom: 'var(--space-1)'
    }
  }, children);
}
function EmLabel({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontStyle: 'italic',
      color: 'var(--text-ink)',
      marginTop: 'var(--space-3)'
    }
  }, children);
}
function CVDocument() {
  return /*#__PURE__*/React.createElement("article", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(DocMasthead, {
    name: "Danny Wardle",
    contact: [{
      label: 'dannygeorgewardle@gmail.com',
      href: 'mailto:dannygeorgewardle@gmail.com'
    }, 'Australian National University', {
      label: 'dannywardle.org',
      href: 'http://dannywardle.org'
    }]
  }), /*#__PURE__*/React.createElement(SectionHeader, null, "Research"), /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Research"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-3) 0 0'
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Areas of Specialisation")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-1) 0 0'
    }
  }, "Metaphysics, Philosophy of Language, Social Ontology"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-4) 0 0'
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Areas of Competence")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-1) 0 0'
    }
  }, "Philosophy of Physics")), /*#__PURE__*/React.createElement(SectionHeader, null, "Education"), /*#__PURE__*/React.createElement(EntryHeader, {
    title: "Doctor of Philosophy",
    date: "2024 \u2013",
    subtitle: "Australian National University"
  }), /*#__PURE__*/React.createElement(BulletList, {
    items: ['Supervisor: Nicholas Southwood']
  }), /*#__PURE__*/React.createElement(EntryHeader, {
    title: "Doctor of Philosophy (Withdrawn)",
    date: "2021 \u2013 2024",
    subtitle: "Australian Catholic University (Dianoia Institute of Philosophy)"
  }), /*#__PURE__*/React.createElement(BulletList, {
    items: ['Withdrew from the program after the disestablishment of the Dianoia Institute', 'Supervisors: John Hawthorne and Sam Baron']
  }), /*#__PURE__*/React.createElement(EntryHeader, {
    title: "Master of Philosophy",
    date: "2019 \u2013 2021",
    subtitle: "University of Adelaide"
  }), /*#__PURE__*/React.createElement(BulletList, {
    items: [/*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("em", null, "Thesis: Opening a Can of Spacetime Worms: The Metaphysics of Persistence")), 'Awarded without revisions in May 2021', 'Supervisors: Antony Eagle and Jordi Fernández']
  }), /*#__PURE__*/React.createElement(EntryHeader, {
    title: "Bachelor of Arts (Advanced)",
    date: "2016 \u2013 2018",
    subtitle: "University of Adelaide"
  }), /*#__PURE__*/React.createElement(BulletList, {
    items: ['Majors: Philosophy and Politics/International Relations']
  }), /*#__PURE__*/React.createElement(SectionHeader, null, "Presentations"), /*#__PURE__*/React.createElement(SubLabel, null, "Invited Talks"), /*#__PURE__*/React.createElement(PublicationEntry, {
    title: "Location and Mereology in Quantum Theory",
    venues: ['Time and Emergence, University of Western Australia, December 2019.']
  }), /*#__PURE__*/React.createElement(SubLabel, null, "Conference Presentations"), /*#__PURE__*/React.createElement(PublicationEntry, {
    title: "Making Sense of Temporary Memberlessness",
    venues: ['Social Ontology, Trinity College Dublin, August 2025.', 'Australasian Association of Philosophy (AAP) Conference, University of Queensland, July 2025.']
  }), /*#__PURE__*/React.createElement(PublicationEntry, {
    title: "Locating Groups",
    venues: ['Social Ontology, Duke University, July 2024.', 'Australasian Postgraduate Philosophy Conference (APPC), University of Western Australia, December 2023.', 'Space, Time, and Location, University of Adelaide, July 2023.']
  }), /*#__PURE__*/React.createElement(PublicationEntry, {
    title: "Social Plenitude",
    venues: ['SANU, Macquarie University, November 2024.', 'Social Ontology & Collective Intentionality, University of Vienna, August 2022.', 'Australasian Association of Philosophy (AAP) Conference, University of Waikato, July 2022.']
  }), /*#__PURE__*/React.createElement(SectionHeader, null, "Grants and Scholarships"), /*#__PURE__*/React.createElement(PlainRow, {
    left: "RTP Stipend Scholarship (ANU), Australian Government",
    right: "2024 \u2013 2028"
  }), /*#__PURE__*/React.createElement(PlainRow, {
    left: "RTP Stipend Scholarship (ACU), Australian Government",
    right: "2021 \u2013 2024"
  }), /*#__PURE__*/React.createElement(PlainRow, {
    left: "MPhil (No Honours) Scholarship, University of Adelaide",
    right: "2019 \u2013 2021"
  }), /*#__PURE__*/React.createElement(SectionHeader, null, "Teaching"), /*#__PURE__*/React.createElement(SubLabel, null, "At the Australian Catholic University"), /*#__PURE__*/React.createElement(EmLabel, null, "Tutor"), /*#__PURE__*/React.createElement(PlainRow, {
    left: "Introduction to Ethics",
    right: "2022"
  }), /*#__PURE__*/React.createElement(PlainRow, {
    left: "Philosophy: The Big Questions",
    right: "2022"
  }), /*#__PURE__*/React.createElement(PlainRow, {
    left: "Theories of Human Nature",
    right: "2021 & 2023"
  }), /*#__PURE__*/React.createElement(SubLabel, null, "At the University of Adelaide"), /*#__PURE__*/React.createElement(EmLabel, null, "Tutor"), /*#__PURE__*/React.createElement(PlainRow, {
    left: "Mind and World",
    right: "2021"
  }), /*#__PURE__*/React.createElement(PlainRow, {
    left: "Introduction to Logic",
    right: "2020"
  }), /*#__PURE__*/React.createElement(SectionHeader, null, "Service"), /*#__PURE__*/React.createElement(SubLabel, null, "Committees"), /*#__PURE__*/React.createElement(PlainRow, {
    left: "Convenor, AAP Postgraduate Committee",
    right: "2020 & 2025"
  }), /*#__PURE__*/React.createElement(PlainRow, {
    left: "Member, AAP Postgraduate Committee",
    right: "2020 \u2013 2025"
  }), /*#__PURE__*/React.createElement(SubLabel, null, "Popular Writing and Media"), /*#__PURE__*/React.createElement(PlainRow, {
    left: "Writer, Plurality of Words",
    right: "2023 \u2013"
  }), /*#__PURE__*/React.createElement(PlainRow, {
    left: "Editor and Web Developer, Sagacity Magazine",
    right: "2022 \u2013"
  }), /*#__PURE__*/React.createElement(SectionHeader, null, "Professional Memberships"), /*#__PURE__*/React.createElement(PlainRow, {
    left: "International Social Ontology Society",
    right: "2022 \u2013"
  }), /*#__PURE__*/React.createElement(PlainRow, {
    left: "Australasian Association of Philosophy",
    right: "2019 \u2013"
  }));
}
window.CVDocument = CVDocument;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cv_document/CVDocument.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BulletList = __ds_scope.BulletList;

__ds_ns.DocMasthead = __ds_scope.DocMasthead;

__ds_ns.EntryHeader = __ds_scope.EntryHeader;

__ds_ns.PublicationEntry = __ds_scope.PublicationEntry;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Link = __ds_scope.Link;

__ds_ns.Tag = __ds_scope.Tag;

})();

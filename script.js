const CV = {
  titular: "Informático autodidacta",
  terminales: {
    izq: { usuario: "samuel", host: "kali", separador: "@" },
    der: { usuario: "root", host: "kali", separador: "💀" }
  },
  stack: ["C", "Python", "Bash", "Kali Linux", "Active Directory", "Nmap", "Burp Suite", "Metasploit", "Wireshark"],

  perfil: {
    nombre: "Samuel Díaz",
    rol: "Estudiante informático autónomo y autodidacta",
    resumen: "Mi nombre es Samuel Díaz, tengo 22 años, soy estudiante de la carrera Ciberseguridad. Soy una persona responsable, puntual y de fácil adaptación al ambiente laboral requerido.\nEste es mi CV:"
  },

  categorias: [
    {
      id: "ciberseguridad", titulo: "Ciberseguridad",
      forma: "fn", nombre: "ciberseguridad", verbo: "comprender",
      items: [
        "Tríada CIA",
        "Autenticación y autorización",
        "Gestión de riesgos",
        "Vulnerabilidades, amenazas y exploits",
        "Malware, ransomware, phishing y spyware",
        "Ingeniería social",
        "Seguridad de la información",
        "Políticas y procedimientos de seguridad",
        "Virtualización",
        "Criptografía"
      ]
    },
    {
      id: "redes", titulo: "Redes · CCNA",
      forma: "array", nombre: "redes",
      items: [
        ["CCNA", "Routing, Switching, OSPF, RIP"],
        "Modelo OSI",
        "Modelo TCP/IP",
        ["Direcciones IP", "Publicas, privadas, subnetting, gateway"],
        ["Puertos y protocolos", "DNS, DHCP, ARP, HTTP, HTTPS, TCP, UDP"],
        "VPN",
        "VLAN",
        "Firewall",
        "Proxy",
        "NAT",
        "Onion Routing"
      ]
    },
    {
      id: "programacion", titulo: "Programación",
      forma: "define",
      items: [
        ["C", "básico"],
        ["Python", "intermedio · automatización"],
        ["MySQL", "intermedio"],
        ["Bash", "scripting"],
        ["HTML/CSS", "desarrollo web"]
      ]
    },
    {
      id: "linux", titulo: "Linux",
      forma: "fn", nombre: "entorno_linux", verbo: "usar",
      items: [
        ["Kali Linux", "pentesting"],
        ["Debian · CentOS · RedHat", "administración de servidores"],
        "Tareas cron",
        "Despliegue de servicios",
        ["Configuración de servicios", "samba, ssh, cron"],
        "Proxmox"
      ]
    },
    {
      id: "hacking", titulo: "Hacking",
      forma: "array", nombre: "hacking",
      items: [
        "OWASP Web Security Testing Guide",
        "PTES",
        "NIST",
        "MITRE ATT&CK",
        "CVSS",
        "CVE",
        "CTFs",
        "OWASP Top 10",
        "Hacking en Active Directory",
        "Análisis de vulnerabilidades",
        ["Fases del pentesting", "enumeración, explotación, post-explotación, persistencia"]
      ]
    },
    {
      id: "web", titulo: "Vulnerabilidades web",
      forma: "enum", nombre: "VulnWeb",
      items: [
        "SQLi",
        ["XSS", "reflejado y almacenado"],
        "SSRF", "CSRF", "SSTI", "LFI", "RFI", "RCE",
        "File upload", "Path traversal", "Buffer overflow"
      ]
    },
    {
      id: "ataques", titulo: "Ataques y técnicas",
      forma: "enum", nombre: "Tecnica",
      items: [
        "Escalada de privilegios",
        "Session Hijacking",
        "ARP Spoofing",
        "MITM",
        "Packet Sniffing",
        "Network Pivoting",
        "Port Forwarding Abuse",
        "Evil Twin",
        "Brute Force",
        "Password Spraying",
        "Pass-the-Hash",
        "Pass-the-Ticket",
        "Kerberoasting",
        "AS-REP Roasting",
        "NTLM Relay"
      ]
    },
    {
      id: "active-directory", titulo: "Active Directory",
      forma: "define",
      items: [
        "Dominios",
        "Controladores de dominio",
        "Usuarios y grupos",
        "Kerberos",
        "LDAP",
        "DNS empresarial",
        "Group Policy (GPO)",
        "Permisos y privilegios",
        "Gestión de cuentas",
        "Políticas de contraseñas",
        "Principio de mínimo privilegio"
      ]
    },
    {
      id: "herramientas", titulo: "Herramientas",
      forma: "fn", nombre: "herramientas", verbo: "ejecutar",
      items: [
        "Nmap",
        "Wireshark",
        "TShark",
        "Burp Suite",
        "Metasploit",
        "Gobuster",
        "DirBuster",
        "Dirb",
        "John the Ripper",
        "Hashcat",
        "OWASP ZAP"
      ]
    }
  ],

  certificados: [
    { nombre: "Cybersecurity Essentials", imagen: "Images/1.Cybersecurity Essentials.jpg", destacado: false },
    { nombre: "Introduction to Cybersecurity", imagen: "Images/2.Introduction to Cybersecurity.jpg", destacado: false },
    { nombre: "CCNAv7 Introduction to Networks", imagen: "Images/3.CCNAv7 Introduction to Networks.jpg", destacado: false },
    { nombre: "CCNAv7 Switching, Routing, and Wireless Essentials", imagen: "Images/4.CCNAv7 Switching, Routing, and Wireless Essentials.jpg", destacado: false },
    { nombre: "Network Security", imagen: "Images/5.Network Security.jpg", destacado: false },
    { nombre: "CCNAv7 Enterprise Networking, Security, and Automation", imagen: "Images/6.CCNAv7 Enterprise Networking, Security, and Automation.jpg", destacado: false },
    { nombre: "Networking Essentials", imagen: "Images/7.Networking Essentials.jpg", destacado: false },
    { nombre: "Partner PCAP - Programming Essentials in Python", imagen: "Images/8.Partner PCAP - Programming Essentials in Python.jpg", destacado: false },
  ],
  galeria: { soloDestacados: false },

  contacto: [
    { k: "email", v: "diazgarciasamuel2801@gmail.com", href: "" },
    { k: "github", v: "github.com/nt-authority-system", href: "https://github.com/nt-authority-system" },
    { k: "linkedin", v: "linkedin.com/in/samuel-diaz-garcia-816159347", href: "https://www.linkedin.com/in/samuel-diaz-garcia-816159347/" },
    { k: "telefono", v: "+51 976 802 332 (llamadas o WhatsApp)", href: "" }
  ]
};

(function () {
  const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const span = (c, s) => '<span class="' + c + '">' + esc(s) + '</span>';
  const K = s => span("kw", s), T = s => span("ty", s), S = s => span("str", s);
  const N = s => span("num", s), F = s => span("fn", s), P = s => span("pp", s), C = s => span("cm", s);
  const I = s => esc(s);
  const cstr = s => S('"' + String(s).replace(/\\/g, "\\\\").replace(/"/g, '\\"') + '"');
  const safeUrl = u => /^https?:\/\//i.test(u || "");
  const link = (text, href) => '<a class="str" href="' + esc(href) + '" target="_blank" rel="noopener noreferrer">' + esc(text) + '</a>';
  const ident = s => {
    let r = String(s).normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^A-Za-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
    if (/^[0-9]/.test(r)) r = "_" + r;
    return r || "_";
  };
  const note = n => n ? " " + C("// " + n) : "";
  const todo = v => v ? "" : " " + C("// completar");

  const lines = [];
  const L = (ind, html, o) => lines.push(Object.assign({ ind: ind, html: html }, o || {}));
  const B = () => lines.push({ ind: 0, html: "" });

  /* Cabecera e includes (sirven como índice con enlaces) */
  L(0, C("/* cv.c · perfil profesional */"));
  B();
  L(0, P("#include") + " " + S("<stdio.h>"));
  CV.categorias.forEach(c => {
    L(0, P("#include") + " " + '<a class="str" href="#' + esc(c.id) + '">"' + esc(c.id) + '.h"</a>' + " " + C("// " + c.titulo));
  });
  L(0, P("#include") + " " + '<a class="str" href="#certificados">"certificados.h"</a>' + " " + C("// Certificados"));

  /* Perfil */
  const pKeys = Object.keys(CV.perfil);
  B();
  L(0, C("/* perfil.h */"), { id: "perfil" });
  L(0, K("typedef") + " " + K("struct") + " {");
  pKeys.forEach(k => L(1, K("const") + " " + K("char") + " *" + I(k) + ";"));
  L(0, "} " + T("Perfil") + ";");
  B();
  L(0, K("const") + " " + T("Perfil") + " " + I("yo") + " = {");
  pKeys.forEach(k => L(1, "." + I(k) + " = " + cstr(CV.perfil[k]) + ","));
  L(0, "};");

  /* Categorías */
  CV.categorias.forEach(c => {
    const items = c.items.map(it => Array.isArray(it) ? it : [it, ""]);
    B();
    L(0, C("/* " + c.id + ".h · " + c.titulo + " */"), { id: c.id });
    if (c.forma === "enum") {
      L(0, K("enum") + " " + T(c.nombre) + " {");
      items.forEach(p => L(1, I(ident(p[0]).toUpperCase()) + "," + note(p[1])));
      L(0, "};");
    } else if (c.forma === "define") {
      items.forEach(p => L(0, P("#define") + " " + I(ident(p[0]).toUpperCase()) + "  " + (p[1] ? cstr(p[1]) : N("1"))));
    } else if (c.forma === "fn") {
      L(0, K("void") + " " + F(c.nombre) + "(" + K("void") + ") {");
      items.forEach(p => L(1, F(c.verbo || "usar") + "(" + cstr(p[0]) + ");" + note(p[1])));
      L(0, "}");
    } else {
      L(0, K("const") + " " + K("char") + " *" + I(c.nombre) + "[] = {");
      items.forEach(p => L(1, cstr(p[0]) + "," + note(p[1])));
      L(0, "};");
      L(0, K("const") + " " + K("int") + " " + I("n_" + c.nombre) + " = " + K("sizeof") + "(" + I(c.nombre) + ") / " + K("sizeof") + "(" + I(c.nombre) + "[0]);");
    }
  });

  /* Certificados: en el código solo los nombres; las imágenes van en la galería final */
  B();
  L(0, C("/* certificados.h · Cisco */"), { id: "certificados" });
  L(0, K("const") + " " + K("char") + " *" + I("certificados") + "[] = {");
  CV.certificados.forEach(c => L(1, cstr(c.nombre) + "," + note(c.fecha)));
  L(0, "};");
  L(0, K("const") + " " + K("int") + " " + I("n_certificados") + " = " + K("sizeof") + "(" + I("certificados") + ") / " + K("sizeof") + "(" + I("certificados") + "[0]);");

  /* main: contacto */
  B();
  L(0, K("int") + " " + F("main") + "(" + K("void") + ") {", { id: "contacto" });
  L(1, F("printf") + "(" + S('"%s · %s\\n"') + ", " + I("yo") + "." + I("nombre") + ", " + I("yo") + "." + I("rol") + ");");
  L(1, F("printf") + "(" + S('"certificados: %d\\n"') + ", " + I("n_certificados") + ");");
  CV.contacto.forEach(c => {
    let val = cstr(c.v || "");
    if (c.v && safeUrl(c.href)) val = link('"' + c.v + '"', c.href);
    L(1, F("printf") + "(" + S('"%-9s %s\\n"') + ", " + cstr(c.k) + ", " + val + ");" + todo(c.v));
  });
  B();
  L(1, K("return") + " " + N("0") + ";");
  L(0, "}");

  /* Pintar */
  let n = 0;
  const html = lines.map(l => {
    n += 1;
    return '<div class="row"' + (l.id ? ' id="' + esc(l.id) + '"' : "") + '><span class="ln">' + n + '</span>' +
      '<span class="src" style="--i:' + l.ind + '">' + (l.html || "&nbsp;") + '</span></div>';
  }).join("");

  document.getElementById("code").innerHTML = html;
  document.getElementById("nombre").textContent = CV.perfil.nombre;
  document.getElementById("rol").textContent = "/* " + CV.titular + " */";
  document.getElementById("salida").textContent = "> " + CV.categorias.length + " módulos cargados · " + CV.certificados.length + " certificado" + (CV.certificados.length === 1 ? "" : "s");

  /* Galería de certificados (abajo del todo) */
  const gal = CV.certificados.filter(c => !(CV.galeria && CV.galeria.soloDestacados) || c.destacado);
  document.getElementById("gal-n").textContent = "> " + gal.length + " archivo" + (gal.length === 1 ? "" : "s");
  document.getElementById("galeria").innerHTML = gal.map(c => {
    const meta = [c.fecha, c.credencial].filter(Boolean).join(" · ");
    const card = '<div class="cert-card"' + (c.imagen ? " hidden" : "") + '>' +
      '<span class="cert-k">' + esc(c.emisor || "Cisco") + ' · certificación</span>' +
      '<span class="cert-n">' + esc(c.nombre) + '</span>' +
      (meta ? '<span class="cert-m">' + esc(meta) + '</span>' : "") + '</div>';
    const shot = c.imagen
      ? '<button class="shot" type="button" data-src="' + esc(c.imagen) + '" aria-label="Ampliar ' + esc(c.nombre) + '"><img src="' + esc(c.imagen) + '" alt="Certificado ' + esc(c.nombre) + '" loading="lazy"></button>'
      : "";
    const cap = c.imagen ? '<figcaption class="cap">' + (safeUrl(c.url) ? link(c.nombre, c.url) : esc(c.nombre)) + '</figcaption>' : "";
    return '<figure class="fig">' + shot + card + cap + '</figure>';
  }).join("");

  document.querySelectorAll("#galeria img").forEach(img => {
    img.addEventListener("error", () => {
      const fig = img.closest("figure");
      fig.querySelector(".shot").hidden = true;
      fig.querySelector(".cert-card").hidden = false;
      const cap = fig.querySelector(".cap");
      if (cap) cap.hidden = true;
    });
  });
  const lb = document.getElementById("lb"), lbImg = document.getElementById("lb-img");
  document.getElementById("galeria").addEventListener("click", e => {
    const b = e.target.closest(".shot");
    if (!b) return;
    lbImg.src = b.getAttribute("data-src");
    lbImg.alt = b.querySelector("img").alt;
    lb.hidden = false;
  });
  lb.addEventListener("click", () => { lb.hidden = true; });
  document.addEventListener("keydown", e => { if (e.key === "Escape") lb.hidden = true; });

  /* Paneles laterales: izquierda = información, derecha = contacto */
  const T0 = CV.terminales || {};
  const mkPanel = t => {
    const quien = '<span class="' + (t.usuario === "root" ? "rojo" : "") + '">' + esc(t.usuario) + esc(t.separador || "@") + esc(t.host) + "</span>";
    const marca = t.usuario === "root" ? "#" : "$";
    return {
      ps: cmd => '<p class="cmd"><span class="u">' + quien + '</span><span class="p">:~' + marca + "</span> " + esc(cmd) + "</p>",
      bar: ruta => '<div class="side-bar"><span class="dots" aria-hidden="true"><i></i><i></i><i></i></span><span>' + quien + ": " + esc(ruta) + "</span></div>"
    };
  };
  const PI = mkPanel(T0.izq || { usuario: "samuel", host: "kali", separador: "@" });
  const PD = mkPanel(T0.der || { usuario: "root", host: "kali", separador: "💀" });

  const modulos = CV.categorias.map(c =>
    '<li><a href="#' + esc(c.id) + '">' + esc(c.id) + '/</a><span class="n">' + c.items.length + "</span></li>").join("");
  document.getElementById("izq").innerHTML = PI.bar("~") +
    '<div class="side-body">' +
    PI.ps("cat nombre.txt") + '<p class="out">' + esc(CV.perfil.nombre) + "</p>" +
    PI.ps("cat rol.txt") + '<p class="out">' + esc(CV.perfil.rol) + "</p>" +
    PI.ps("ls modulos/") + '<ul class="ls">' + modulos + "</ul>" +
    PI.ps("cat stack.txt") + '<p class="out stack">' + (CV.stack || []).map(s => esc(s)).join(" · ") + "</p>" +
    "</div>";

  const contactos = CV.contacto.map(c => {
    const val = !c.v ? '<span class="cm">// completar</span>' : (safeUrl(c.href) ? link(c.v, c.href) : esc(c.v));
    return '<div class="kv"><span class="k">' + esc(c.k) + '</span><span class="v">' + val + "</span></div>";
  }).join("");
  const certsLs = CV.certificados.map(c => '<li><a href="#certificados-img">' + esc(c.nombre) + "</a></li>").join("");
  document.getElementById("der").innerHTML = PD.bar("~/contacto") +
    '<div class="side-body">' +
    PD.ps("cat contacto.txt") + contactos +
    PD.ps("ls certificados/") + '<ul class="ls">' + certsLs + "</ul>" +
    "</div>";

  /* Tema claro/oscuro */
  const root = document.documentElement;
  try {
    const t = localStorage.getItem("cv-tema");
    if (t === "dark" || t === "light") root.setAttribute("data-theme", t);
  } catch (e) {}
  document.getElementById("tema").addEventListener("click", () => {
    const cur = root.getAttribute("data-theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = cur === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("cv-tema", next); } catch (e) {}
  });
})();

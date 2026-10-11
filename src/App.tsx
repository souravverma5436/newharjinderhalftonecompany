import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Factory,
  FileImage,
  Mail,
  MapPin,
  Menu,
  PackageCheck,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';

const emailJsServiceId = (import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined) || 'service_r66f0jy';
const emailJsTemplateId = (import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined) || 'template_ygi3m1q';
const emailJsPublicKey = (import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined) || 'wPbfuSjkoq6P08mKp';
const mapsUrl = 'https://maps.app.goo.gl/wWCE7VveeoUJ8Q3LA';
const mapEmbedUrl =
  'https://maps.google.com/maps?q=New%20Harjinder%20Halftone%20Company%2C%20Ludhiana%2C%20Punjab%2C%20India&z=15&output=embed';

const navItems = ['Home', 'About', 'Products', 'Manufacturing', 'Quality', 'Contact'];

const productCategories = [
  {
    title: 'Industrial Stickers & Labels',
    description: 'Custom labels for equipment, product identification, warnings, batch details, and durable industrial use cases.',
    image: 'https://image.made-in-china.com/202f0j00wfYoVNpJnTci/Warning-Label-Sticker.webp',
  },
  {
    title: 'Product Branding Stickers',
    description: 'Presentation-led stickers for product packs, branded surfaces, containers, and retail-facing applications.',
    image: 'https://image.made-in-china.com/203f0j00KFniHRlokycu/Jingda-2-1-Colors-Cloth-Satin-Cotton-Tape-Flexo-Label-Printing-Machine.webp',
  },
  {
    title: 'Barcode & Identification Labels',
    description: 'Editable label content for barcodes, serial identification, inventory marking, and legible operational data.',
    image: 'https://www.gravograph.pt/upload/images/Placa-serie-durablack%281%29.jpg',
  },
  {
    title: 'Aluminium Printing',
    description: 'Illustrative category for aluminium print requirements, name plates, overlays, and product marking projects.',
    image: 'https://www.narayangraphic.co.in/assets/products/Aluminum-Labels.jpg',
  },
  {
    title: 'Tin Printing',
    description: 'Configurable content for printed tin components, container-facing artwork, and product-specific print jobs.',
    image: 'https://tinova-sa.com/images/about-hero.jpeg',
  },
  {
    title: 'Metal Labels',
    description: 'Metal identification pieces for machinery, product plates, equipment branding, and technical labelling.',
    image: 'https://www.gravograph.pt/upload/images/Placa-serie-durablack%281%29.jpg',
  },
  {
    title: 'Brass Name Plates',
    description: 'Premium brass plate requirements for formal identification, signage, product plates, and engraved-style finishes.',
    image: 'https://www.dnpe.com/wp-content/uploads/2015/01/Etched_Brass_Data_Plate.jpg',
  },
  {
    title: 'Flexible Packaging / Pouches',
    description: 'Editable category for pouch artwork, flexible packaging print preparation, and custom presentation needs.',
    image: 'https://ssflexipackltd.com/images/about/about-page-factory.png',
  },
  {
    title: 'Bottle Caps Printing',
    description: 'Product-specific cap printing enquiries, artwork review, and small-surface branding discussions.',
    image: 'https://www.xuanhai-machine.com/upload/1c/202404/hy-pg2-product-features-of-two-color-fully-automatic-bottle-cap-printing-machine-3.jpg',
  },
  {
    title: 'Custom Printing Solutions',
    description: 'A consultative route for unusual materials, short-run requirements, unique sizes, or special identification needs.',
    image: 'https://image.made-in-china.com/203f0j00KFniHRlokycu/Jingda-2-1-Colors-Cloth-Satin-Cotton-Tape-Flexo-Label-Printing-Machine.webp',
  },
  {
    title: 'Artwork & Print Preparation',
    description: 'Artwork checking, print-ready file preparation, layout support, and approval coordination before production.',
    image: 'https://www.szxjmy.com/UploadFiles/FCK/1%2847%29.jpg',
  },
  {
    title: 'Advertising Items & Laser Engraving',
    description: 'Custom advertising pieces, promotional marking, laser engraving, acrylic or metal tags, and branded display items where offered.',
    image: 'https://www.stampasa.it/uploads/image/incisione_laser.png',
  },
];

const processSteps = [
  'Requirement Discussion',
  'Artwork & Design Approval',
  'Pre-Press Preparation',
  'Printing / Production',
  'Quality Inspection',
  'Dispatch',
];

const industries = [
  'Agricultural Equipment',
  'Manufacturing',
  'Engineering',
  'Packaging',
  'Consumer Products',
  'Industrial Components',
];

const gallery = [
  {
    title: 'Printed sticker sheets',
    alt: 'Illustrative printed label sheets for industrial branding',
    image: 'https://image.made-in-china.com/202f0j00wfYoVNpJnTci/Warning-Label-Sticker.webp',
  },
  {
    title: 'Metal identification plates',
    alt: 'Illustrative close-up of metal components and precision finishing',
    image: 'https://www.narayangraphic.co.in/assets/products/Aluminum-Labels.jpg',
  },
  {
    title: 'Brushed aluminium detail',
    alt: 'Illustrative brushed metal surface suitable for name plate presentation',
    image: 'https://www.gravograph.pt/upload/images/Placa-serie-durablack%281%29.jpg',
  },
  {
    title: 'Production equipment',
    alt: 'Illustrative industrial machinery used as replaceable website imagery',
    image: 'https://ssflexipackltd.com/images/about/about-page-factory.png',
  },
  {
    title: 'Packaging presentation',
    alt: 'Illustrative packaging image for product branding applications',
    image: 'https://tinova-sa.com/images/about-hero.jpeg',
  },
  {
    title: 'Industrial identification',
    alt: 'Illustrative technical manufacturing environment for identification solutions',
    image: 'https://www.dnpe.com/wp-content/uploads/2015/01/Etched_Brass_Data_Plate.jpg',
  },
];

type FormState = {
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
};

const initialForm: FormState = {
  name: '',
  company: '',
  phone: '',
  email: '',
  message: '',
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<(typeof gallery)[number] | null>(null);
  const [form, setForm] = useState<FormState>(initialForm);
  const [formMessage, setFormMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setFormMessage('');
  };

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const requiredMissing = !form.name || !form.phone || !form.email || !form.message;
    const emailInvalid = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);

    if (requiredMissing) {
      setFormMessage('Please complete full name, phone number, email, and message.');
      return;
    }
    if (emailInvalid) {
      setFormMessage('Please enter a valid email address.');
      return;
    }
    if (!emailJsServiceId || !emailJsTemplateId || !emailJsPublicKey) {
      setFormMessage('EmailJS is not configured yet. Add the service ID, template ID, and public key in .env.');
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.send(
        emailJsServiceId,
        emailJsTemplateId,
        {
          full_name: form.name,
          company_name: form.company || 'Not provided',
          phone_number: form.phone,
          email: form.email,
          message: form.message,
        },
        { publicKey: emailJsPublicKey },
      );
      setForm(initialForm);
      setFormMessage('Thank you. Your message has been sent.');
    } catch {
      setFormMessage('Message could not be sent. Please check the EmailJS configuration and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="New Harjinder Halftone Company home">
          <span>New Harjinder</span>
          <strong>Halftone Company</strong>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <button key={item} type="button" onClick={() => scrollTo(item)}>
              {item}
            </button>
          ))}
        </nav>
        <button className="quote-link" type="button" onClick={() => scrollTo('Contact')}>
          Request a Quote
        </button>
        <button className="menu-button" type="button" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <Menu size={22} />
        </button>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div className="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button className="close-menu" type="button" onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <X size={22} />
            </button>
            {navItems.map((item) => (
              <button key={item} type="button" onClick={() => scrollTo(item)}>
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <section id="home" className="hero section-dark">
          <div className="hero-media" aria-hidden="true" />
          <div className="hero-overlay" />
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
          >
            <p className="eyebrow">Punjab, India | Industrial printing enquiries</p>
            <h1>Precision Printing. Industrial Excellence.</h1>
            <p className="hero-copy">
              Custom printing and identification solutions engineered for clarity, consistency, and professional presentation.
            </p>
            <div className="hero-actions">
              <button className="button primary" type="button" onClick={() => scrollTo('Products')}>
                Explore Our Capabilities <ArrowRight size={18} />
              </button>
              <button className="button secondary" type="button" onClick={() => scrollTo('Contact')}>
                Request a Quote
              </button>
            </div>
          </motion.div>
        </section>

        <section id="about" className="section intro">
          <div className="section-kicker">Company Introduction</div>
          <div className="split">
            <div>
              <h2>Industrial printing with a careful, requirement-led approach.</h2>
            </div>
            <div className="rich-copy">
              <p>
                New Harjinder Halftone Company is presented here as a professional industrial printing business led by
                Balwinder Singh. This website keeps the company story editable until the owner confirms exact history,
                facility details, contact channels, and service scope.
              </p>
              <p>
                The positioning focuses on dependable production communication, clear product identification,
                customisation, print legibility, and artwork approval before manufacturing decisions are made.
              </p>
            </div>
          </div>
        </section>

        <section id="products" className="section ivory">
          <div className="section-heading">
            <div>
              <div className="section-kicker">Product & Service Catalogue</div>
              <h2>Editable capability categories for quotation conversations.</h2>
            </div>
            <p>
              These categories are built from relevant industrial printing references and should be confirmed by the
              owner before publication. Images are online illustrative references and should be replaced with real company
              photos when available.
            </p>
          </div>
          <div className="product-grid">
            {productCategories.map((product) => (
              <article className="product-card" key={product.title}>
                <img src={product.image} alt={`${product.title} illustrative stock-style visual`} loading="lazy" />
                <div>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <button type="button" onClick={() => scrollTo('Contact')}>
                    Discuss Your Requirements <ChevronRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="manufacturing" className="section process-section">
          <div className="section-heading">
            <div>
              <div className="section-kicker">Manufacturing Capabilities</div>
              <h2>A clear workflow from requirement to dispatch.</h2>
            </div>
            <p>The actual workflow varies by product, material, artwork readiness, and confirmed in-house services.</p>
          </div>
          <div className="timeline">
            {processSteps.map((step, index) => (
              <motion.div
                className="timeline-step"
                key={step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: index * 0.04 }}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{step}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="quality" className="section quality section-dark">
          <div className="quality-image" aria-hidden="true" />
          <div className="quality-content">
            <div className="section-kicker">Quality & Precision</div>
            <h2>Built around clarity, suitability, and finish.</h2>
            <div className="quality-list">
              {[
                ['Print clarity', 'Readable product information and clean visual reproduction.'],
                ['Material suitability', 'Product-specific discussions before committing to a material or finish.'],
                ['Colour consistency', 'Artwork approval and production checks for consistent presentation.'],
                ['Finishing attention', 'A focus on edges, legibility, alignment, and final handling.'],
              ].map(([title, copy]) => (
                <article key={title}>
                  <ShieldCheck size={20} />
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section industries">
          <div className="section-heading compact">
            <div>
              <div className="section-kicker">Industries Served</div>
              <h2>Potential applications for confirmed services.</h2>
            </div>
            <p>No client relationships or partnerships are implied.</p>
          </div>
          <div className="industry-grid">
            {industries.map((industry) => (
              <div key={industry}>
                <Factory size={18} />
                <span>{industry}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section gallery-section">
          <div className="section-heading">
            <div>
              <div className="section-kicker">Project / Product Gallery</div>
              <h2>Replaceable illustrative imagery, not completed company project proof.</h2>
            </div>
            <p>Use real company photography here once product and manufacturing images are available.</p>
          </div>
          <div className="gallery-grid">
            {gallery.map((item) => (
              <button key={item.title} type="button" onClick={() => setSelectedImage(item)}>
                <img src={item.image} alt={item.alt} loading="lazy" />
                <span>{item.title}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="section why">
          <div className="section-kicker">Why Work With Us</div>
          <h2>Professional enquiry handling for customised industrial print requirements.</h2>
          <div className="benefit-grid">
            {[
              [PackageCheck, 'Customised product requirements'],
              [Sparkles, 'Focus on print quality and legibility'],
              [FileImage, 'Clear artwork approval before production'],
              [ClipboardCheck, 'Product-specific manufacturing approach'],
              [CheckCircle2, 'Professional enquiry and quotation process'],
            ].map(([Icon, text]) => {
              const BenefitIcon = Icon as typeof PackageCheck;
              return (
                <div key={text as string}>
                  <BenefitIcon size={22} />
                  <span>{text as string}</span>
                </div>
              );
            })}
          </div>
        </section>

        <section id="contact" className="section contact section-dark">
          <div className="contact-details">
            <div className="section-kicker">Contact & Quotation</div>
            <h2>Share the product requirement. Keep the technical details editable.</h2>
            <div className="identity-panel">
              <h3>New Harjinder Halftone Company</h3>
              <p>Proprietor / Owner: Balwinder Singh</p>
              <p>GSTIN: 03AQAPK6203D1ZN</p>
              <p>
                <MapPin size={16} />
                <a href={mapsUrl} target="_blank" rel="noreferrer">View location on Google Maps</a>
              </p>
              <p>
                <Phone size={16} />
                <a href="tel:+919815445436">+91 98154 45436</a>, <a href="tel:+917009705439">+91 70097 05439</a>
              </p>
              <p>
                <Phone size={16} />
                Landline: <a href="tel:+911615055436">+91 161 505 5436</a>
              </p>
              <p>
                <Phone size={16} />
                WhatsApp: <a href="https://wa.me/919815445436" target="_blank" rel="noreferrer">+91 98154 45436</a>
              </p>
              <p>
                <Mail size={16} />
                <a href="mailto:newharjinderhalftoneco@gmail.com">newharjinderhalftoneco@gmail.com</a>
              </p>
            </div>
          </div>
          <form className="quote-form" onSubmit={submitForm} noValidate>
            <label>
              Full name *
              <input
                name="full_name"
                value={form.name}
                onChange={(event) => updateField('name', event.target.value)}
                autoComplete="name"
              />
            </label>
            <label>
              Company name
              <input
                name="company_name"
                value={form.company}
                onChange={(event) => updateField('company', event.target.value)}
                autoComplete="organization"
              />
            </label>
            <label>
              Phone number *
              <input
                name="phone_number"
                value={form.phone}
                onChange={(event) => updateField('phone', event.target.value)}
                autoComplete="tel"
              />
            </label>
            <label>
              Email *
              <input
                name="email"
                value={form.email}
                onChange={(event) => updateField('email', event.target.value)}
                autoComplete="email"
                inputMode="email"
              />
            </label>
            <label className="wide">
              Message *
              <textarea
                name="message"
                value={form.message}
                onChange={(event) => updateField('message', event.target.value)}
                rows={5}
              />
            </label>
            {formMessage && <p className="form-message">{formMessage}</p>}
            <button className="button primary wide" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending message...' : 'Send Message'}
            </button>
          </form>
        </section>
      </main>

      <footer>
        <div>
          <strong>New Harjinder Halftone Company</strong>
          <p>Industrial printing, identification, and custom product presentation enquiries in Punjab, India.</p>
          <p>GSTIN: 03AQAPK6203D1ZN</p>
        </div>
        <div>
          <span>Navigation</span>
          {navItems.map((item) => (
            <button key={item} type="button" onClick={() => scrollTo(item)}>
              {item}
            </button>
          ))}
        </div>
        <div>
          <span>Contact</span>
          <p>Phone: <a href="tel:+919815445436">+91 98154 45436</a>, <a href="tel:+917009705439">+91 70097 05439</a></p>
          <p>Landline: <a href="tel:+911615055436">+91 161 505 5436</a></p>
          <p>WhatsApp: <a href="https://wa.me/919815445436" target="_blank" rel="noreferrer">+91 98154 45436</a></p>
          <p>Email: <a href="mailto:newharjinderhalftoneco@gmail.com">newharjinderhalftoneco@gmail.com</a></p>
          <p>Location: <a href={mapsUrl} target="_blank" rel="noreferrer">View on Google Maps</a></p>
        </div>
        <div className="footer-map">
          <span>Location</span>
          <iframe
            title="New Harjinder Halftone Company location map"
            src={mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a href={mapsUrl} target="_blank" rel="noreferrer">Open larger map</a>
        </div>
        <p className="legal">
          <a href="https://svdesizns.vercel.app/" target="_blank" rel="noreferrer">
            © {new Date().getFullYear()} Sv_desizns. All rights reserved. Designed by Sourav Verma
          </a>
        </p>
      </footer>

      <AnimatePresence>
        {selectedImage && (
          <motion.div className="lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button type="button" onClick={() => setSelectedImage(null)} aria-label="Close gallery image">
              <X size={24} />
            </button>
            <img src={selectedImage.image} alt={selectedImage.alt} />
            <p>{selectedImage.title}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;


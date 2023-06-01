import { Routes, Route } from "react-router-dom";

import Navigation from "./components/navigation/navigation.component";
import ContactPreview from "./components/contact-preview/contact.preview.component";
import Home from "./routes/home/home.components";
import OverviewPreview from "./components/overview-preview/overview.preview.component";
import Capabilities from "./routes/capabilities/capabilties.component";
import Insight from "./routes/insight/insight.component";
import Contact from "./routes/contact/contact.component";
import Footer from "./components/footer/footer.component";
import Client from "./routes/clients/clients.component";
import TermsAndConditions from "./routes/termsandconditions/termsandcondition.component";
import Privacy from "./routes/privacy/privacy.component";
import About from "./routes/about/about.component";

import AfricaDigital from "./routes/insight/africa-digital.component";
import LessonsFromIndia from "./routes/insight/lessons-from-india.component";
import PromisesPeril from "./routes/insight/promises-peril.component";
import JackOfAllTrades from "./routes/insight/jack-of-all-trades.component";
import Blueprint from "./routes/blueprint/blueprint.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/" element={<Footer />}>
          <Route path="/" element={<ContactPreview />}>
            <Route index element={<Home />} />
            <Route path="overview" element={<OverviewPreview />} />
            <Route path="capabilities" element={<Capabilities />} />
            <Route path="clients" element={<Client />} />
            <Route path="terms" element={<TermsAndConditions />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blueprint" element={<Blueprint />} />
            <Route path="/insights" element={<Insight />} />
            <Route
              path="/insights/africa-digital"
              element={<AfricaDigital />}
            />
            <Route
              path="/insights/lessons-from-india"
              element={<LessonsFromIndia />}
            />
            <Route path="/insights/promises" element={<PromisesPeril />} />
            <Route
              path="/insights/jack-of-all-trades"
              element={<JackOfAllTrades />}
            />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

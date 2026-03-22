import Services from "../components/Services";
import ServiceExpansion from "../components/ServiceExpansion";

const ServicesPage = () => {
  return (
    <div className="page-content" style={{ paddingTop: '160px', background: '#ffffff' }}>
      <Services />
      <ServiceExpansion />
    </div>
  )
}

export default ServicesPage;

// components
import PolicyComponent from '@/components/Policy-Component';

export default function PrivacyPolicy() {
  return (
    <PolicyComponent>
      <PolicyComponent.PolicyTitle>Privacy Policy</PolicyComponent.PolicyTitle>
      <PolicyComponent.PolicyContent>
        Informações pessoais. “Informações Pessoais” são dados relacionados a
        você e podem –– isoladamente ou em combinação com outras informações ––
        identificar você como um indivíduo. As Informações Pessoais não incluem
        dados que foram agregados ou tornados anônimos, de modo que você não
        possa mais ser identificado usando meios razoavelmente disponíveis para
        nós.
      </PolicyComponent.PolicyContent>
    </PolicyComponent>
  );
}

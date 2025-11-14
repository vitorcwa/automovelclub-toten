import style from "./Veiculo.module.css";

export default function SalvarLead() {
  return (
    <div>
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/InKPa1TdFPVwATxXlOE9"
        className={style.iframe}
        id="inline-InKPa1TdFPVwATxXlOE9"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Salvar Lead do Site"
        data-height="429"
        data-layout-iframe-id="inline-InKPa1TdFPVwATxXlOE9"
        data-form-id="InKPa1TdFPVwATxXlOE9"
        title="Salvar Lead do Site"
      ></iframe>
      <script src="https://link.msgsndr.com/js/form_embed.js"></script>
    </div>
  );
}
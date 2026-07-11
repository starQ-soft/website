import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import {
  LegalModalBackdrop,
  LegalModalBody,
  LegalModalClose,
  LegalModalDialog,
  LegalModalHeader,
} from '../styles';

type LegalDocument = 'terms' | 'privacy';
type LegalSection = { heading: string; body: string };

interface LegalModalProps {
  documentType: LegalDocument;
  language: string;
  title: string;
  onClose: () => void;
}

const chineseContent: Record<LegalDocument, Array<{ heading: string; body: string }>> = {
  terms: [
    { heading: '1. 条款的接受', body: '访问或使用 StarQ Soft 提供的网站、游戏及相关服务，即表示您已阅读、理解并同意遵守本服务条款。如果您不同意这些条款，请停止使用相关服务。' },
    { heading: '2. 服务的使用', body: '您应以合法、合理的方式使用我们的服务，不得干扰服务运行、绕过安全措施、侵犯他人权益，或利用服务实施任何违法或有害行为。' },
    { heading: '3. 知识产权', body: '网站、游戏及相关内容中的商标、文字、图像、音频、软件和其他材料，除另有说明外，均由 StarQ Soft 或相应权利人拥有。未经书面许可，不得复制、修改、出售或用于商业目的。' },
    { heading: '4. 第三方服务', body: '服务中可能包含第三方网站或平台的链接。第三方服务由其各自运营方负责，我们不对其内容、可用性或数据处理方式作出保证。' },
    { heading: '5. 免责声明与责任限制', body: '我们会努力保持服务稳定、安全和准确，但不保证服务始终不间断或完全无误。在法律允许的最大范围内，我们不对因使用或无法使用服务而产生的间接或附带损失承担责任。' },
    { heading: '6. 条款变更与联系', body: '我们可能根据业务或法律要求更新本条款。更新后的条款将在本网站发布并自标明日期起生效。如有疑问，请通过本页联系表单与我们联系。' },
  ],
  privacy: [
    { heading: '1. 我们收集的信息', body: '当您使用联系表单时，我们会收集您主动提供的姓名、电子邮箱和留言内容。我们也可能收集保障网站运行所需的基础技术信息，例如浏览器类型、设备信息和错误日志。' },
    { heading: '2. 信息的使用方式', body: '我们仅将信息用于回复咨询、提供和改进服务、维护安全、履行法律义务，以及在获得您同意时向您发送相关信息。' },
    { heading: '3. 信息共享', body: '我们不会出售您的个人信息。仅在提供服务所必需、获得您的授权或法律要求的情况下，才会向受约束的服务提供商或有关机构披露信息。联系表单可能由第三方表单服务商代为处理。' },
    { heading: '4. 保存与安全', body: '我们仅在实现上述目的或满足法律要求所需的期间内保存个人信息，并采取合理的技术和管理措施防止未经授权的访问、泄露、篡改或丢失。' },
    { heading: '5. 您的权利', body: '根据适用法律，您可以请求访问、更正或删除您的个人信息，或撤回此前作出的同意。部分请求可能因法律义务而受到限制。' },
    { heading: '6. 联系我们', body: '如需行使隐私权利或对本政策有任何疑问，请通过本页联系表单联系我们。我们会在合理期限内处理您的请求。' },
  ],
};

const englishContent: typeof chineseContent = {
  terms: [
    { heading: '1. Acceptance of Terms', body: 'By accessing or using the websites, games, and related services provided by StarQ Soft, you acknowledge that you have read, understood, and agreed to these Terms of Service. If you do not agree, please discontinue use of the services.' },
    { heading: '2. Use of the Services', body: 'You must use the services lawfully and responsibly. You may not disrupt their operation, bypass security measures, infringe the rights of others, or use the services for unlawful or harmful activities.' },
    { heading: '3. Intellectual Property', body: 'Unless stated otherwise, the trademarks, text, images, audio, software, and other materials in our websites and games belong to StarQ Soft or their respective owners. They may not be copied, modified, sold, or used commercially without written permission.' },
    { heading: '4. Third-party Services', body: 'Our services may link to third-party websites or platforms. Those services are controlled by their respective operators, and we are not responsible for their content, availability, or data practices.' },
    { heading: '5. Disclaimers and Liability', body: 'We work to keep our services stable, secure, and accurate, but do not guarantee uninterrupted or error-free operation. To the fullest extent permitted by law, we are not liable for indirect or incidental loss resulting from use of, or inability to use, the services.' },
    { heading: '6. Changes and Contact', body: 'We may update these terms to reflect business or legal requirements. Updated terms become effective when published with a revised date. Please use the contact form on this page if you have questions.' },
  ],
  privacy: [
    { heading: '1. Information We Collect', body: 'When you use our contact form, we collect the name, email address, and message you choose to provide. We may also collect basic technical information needed to operate the website, such as browser, device, and error-log data.' },
    { heading: '2. How We Use Information', body: 'We use information to answer inquiries, provide and improve our services, maintain security, comply with legal obligations, and send relevant communications when you have consented.' },
    { heading: '3. Information Sharing', body: 'We do not sell personal information. We disclose it only to service providers that help us operate our services, when you authorize us, or when required by law. Contact-form submissions may be processed by a third-party form provider.' },
    { heading: '4. Retention and Security', body: 'We retain personal information only for as long as necessary for the purposes above or to meet legal requirements. We use reasonable technical and organizational safeguards against unauthorized access, disclosure, alteration, or loss.' },
    { heading: '5. Your Rights', body: 'Depending on applicable law, you may request access to, correction of, or deletion of your personal information, or withdraw consent previously given. Some requests may be limited by legal obligations.' },
    { heading: '6. Contact Us', body: 'To exercise your privacy rights or ask questions about this policy, contact us using the form on this page. We will respond within a reasonable period.' },
  ],
};

const traditionalChineseContent: typeof chineseContent = {
  terms: [
    { heading: '1. 條款的接受', body: '存取或使用 StarQ Soft 提供的網站、遊戲及相關服務，即表示您已閱讀、理解並同意遵守本服務條款。如果您不同意，請停止使用相關服務。' },
    { heading: '2. 服務的使用', body: '您應以合法、合理的方式使用服務，不得干擾服務運作、規避安全措施、侵害他人權益，或利用服務從事違法或有害行為。' },
    { heading: '3. 智慧財產權', body: '除另有說明外，網站、遊戲中的商標、文字、圖像、音訊、軟體及其他材料均由 StarQ Soft 或相應權利人擁有。未經書面許可，不得用於商業目的。' },
    { heading: '4. 第三方服務', body: '服務可能包含第三方網站或平台的連結。第三方服務由各自營運者負責，我們不對其內容、可用性或資料處理方式作出保證。' },
    { heading: '5. 免責與責任限制', body: '我們會努力維持服務穩定、安全與準確，但不保證服務永不中斷或完全無誤。在法律允許的最大範圍內，我們不對間接或附帶損失承擔責任。' },
    { heading: '6. 條款變更與聯絡', body: '我們可能依業務或法律要求更新本條款。更新內容將於網站公布。如有疑問，請透過本頁聯絡表單與我們聯繫。' },
  ],
  privacy: [
    { heading: '1. 我們蒐集的資訊', body: '當您使用聯絡表單時，我們會蒐集您主動提供的姓名、電子郵件及留言內容，也可能蒐集網站運作所需的基本技術資訊。' },
    { heading: '2. 資訊使用方式', body: '我們僅將資訊用於回覆詢問、提供與改善服務、維護安全、履行法律義務，以及在取得同意時傳送相關資訊。' },
    { heading: '3. 資訊分享', body: '我們不會出售您的個人資訊。僅在提供服務所必需、取得您的授權或法律要求時，才會向受約束的服務供應商或有關機構揭露。' },
    { heading: '4. 保存與安全', body: '我們僅於實現上述目的或符合法律要求所需期間保存個人資訊，並採取合理措施防止未經授權的存取、洩漏、竄改或遺失。' },
    { heading: '5. 您的權利', body: '依適用法律，您可以請求存取、更正或刪除個人資訊，或撤回先前作出的同意。' },
    { heading: '6. 聯絡我們', body: '如需行使隱私權利或對本政策有疑問，請透過本頁聯絡表單與我們聯繫。' },
  ],
};

const localizedContent: Record<string, Record<LegalDocument, LegalSection[]>> = {
  'ja-jp': {
    terms: [
      { heading: '1. 規約への同意', body: 'StarQ Softのウェブサイト、ゲームおよび関連サービスを利用することで、本規約を読み、理解し、同意したものとみなされます。' },
      { heading: '2. サービスの利用', body: 'サービスは適法かつ責任をもって利用し、運営の妨害、セキュリティ対策の回避、他者の権利侵害を行ってはなりません。' },
      { heading: '3. 知的財産権', body: '別途記載がない限り、商標、文章、画像、音声、ソフトウェア等はStarQ Softまたは各権利者に帰属します。書面による許可なく商用利用できません。' },
      { heading: '4. 第三者サービス', body: '第三者のサイトやプラットフォームは各運営者が管理しており、当社はその内容、可用性、データ取扱いについて責任を負いません。' },
      { heading: '5. 免責および責任制限', body: '当社は安定したサービス提供に努めますが、常時利用可能または完全に無瑕疵であることを保証しません。法令上認められる範囲で、間接的・付随的損害への責任を負いません。' },
      { heading: '6. 変更・お問い合わせ', body: '本規約は法令や事業上の必要に応じて更新される場合があります。ご質問は本ページのお問い合わせフォームからご連絡ください。' },
    ],
    privacy: [
      { heading: '1. 収集する情報', body: 'お問い合わせフォームで入力された氏名、メールアドレス、メッセージ、およびサイト運営に必要な基本的な技術情報を収集する場合があります。' },
      { heading: '2. 利用目的', body: 'お問い合わせへの回答、サービスの提供・改善、安全確保、法的義務の履行、および同意を得た情報提供に利用します。' },
      { heading: '3. 情報の共有', body: '個人情報を販売しません。サービス提供に必要な委託先、本人の同意がある場合、または法令に基づく場合に限り開示します。' },
      { heading: '4. 保存と安全管理', body: '必要な期間のみ情報を保存し、不正アクセス、漏えい、改ざん、紛失を防ぐため合理的な安全管理措置を講じます。' },
      { heading: '5. お客様の権利', body: '適用法令に基づき、個人情報の開示、訂正、削除または同意の撤回を請求できます。' },
      { heading: '6. お問い合わせ', body: 'プライバシーに関するご質問や権利行使は、本ページのお問い合わせフォームからご連絡ください。' },
    ],
  },
  'ko-kr': {
    terms: [
      { heading: '1. 약관 동의', body: 'StarQ Soft의 웹사이트, 게임 및 관련 서비스를 이용하면 본 약관을 읽고 이해했으며 이에 동의한 것으로 간주됩니다.' },
      { heading: '2. 서비스 이용', body: '서비스를 합법적이고 책임감 있게 이용해야 하며 운영 방해, 보안 우회 또는 타인의 권리 침해 행위를 해서는 안 됩니다.' },
      { heading: '3. 지식재산권', body: '별도 표시가 없는 한 상표, 문구, 이미지, 음원, 소프트웨어 등은 StarQ Soft 또는 해당 권리자에게 귀속되며 서면 허가 없이 상업적으로 사용할 수 없습니다.' },
      { heading: '4. 제3자 서비스', body: '제3자 사이트와 플랫폼은 각 운영자가 관리하며 당사는 그 내용, 가용성 또는 데이터 처리에 책임을 지지 않습니다.' },
      { heading: '5. 면책 및 책임 제한', body: '안정적인 서비스 제공을 위해 노력하지만 중단이나 오류가 없음을 보장하지 않으며, 법이 허용하는 범위에서 간접 또는 부수적 손해에 책임을 지지 않습니다.' },
      { heading: '6. 변경 및 문의', body: '법률 또는 사업상 필요에 따라 약관을 변경할 수 있습니다. 문의 사항은 이 페이지의 문의 양식을 이용해 주세요.' },
    ],
    privacy: [
      { heading: '1. 수집하는 정보', body: '문의 양식에 제공한 이름, 이메일 주소, 메시지와 사이트 운영에 필요한 기본 기술 정보를 수집할 수 있습니다.' },
      { heading: '2. 이용 목적', body: '문의 답변, 서비스 제공 및 개선, 보안 유지, 법적 의무 준수와 동의한 정보 제공에 사용합니다.' },
      { heading: '3. 정보 공유', body: '개인정보를 판매하지 않으며 서비스 제공에 필요한 업체, 동의한 경우 또는 법률상 요구되는 경우에만 공개합니다.' },
      { heading: '4. 보관 및 보안', body: '필요한 기간 동안만 정보를 보관하고 무단 접근, 유출, 변경 또는 손실 방지를 위한 합리적인 조치를 취합니다.' },
      { heading: '5. 이용자의 권리', body: '관련 법률에 따라 개인정보의 열람, 정정, 삭제 또는 동의 철회를 요청할 수 있습니다.' },
      { heading: '6. 문의', body: '개인정보 관련 문의나 권리 행사는 이 페이지의 문의 양식을 이용해 주세요.' },
    ],
  },
  'es-es': {
    terms: [
      { heading: '1. Aceptación de los términos', body: 'Al utilizar los sitios web, juegos y servicios relacionados de StarQ Soft, confirmas que has leído, entendido y aceptado estos términos.' },
      { heading: '2. Uso de los servicios', body: 'Debes usar los servicios de forma legal y responsable, sin alterar su funcionamiento, eludir medidas de seguridad ni vulnerar derechos de terceros.' },
      { heading: '3. Propiedad intelectual', body: 'Salvo indicación contraria, las marcas, textos, imágenes, audios y programas pertenecen a StarQ Soft o a sus titulares y no pueden utilizarse comercialmente sin permiso escrito.' },
      { heading: '4. Servicios de terceros', body: 'Los sitios y plataformas de terceros son gestionados por sus operadores; no respondemos por su contenido, disponibilidad ni tratamiento de datos.' },
      { heading: '5. Exención y limitación de responsabilidad', body: 'Procuramos ofrecer servicios estables, pero no garantizamos que estén libres de interrupciones o errores. En la medida permitida por la ley, no respondemos por daños indirectos o incidentales.' },
      { heading: '6. Cambios y contacto', body: 'Podemos actualizar estos términos por motivos legales o comerciales. Para cualquier consulta, utiliza el formulario de contacto de esta página.' },
    ],
    privacy: [
      { heading: '1. Información que recopilamos', body: 'Podemos recopilar el nombre, correo y mensaje enviados en el formulario, además de datos técnicos básicos necesarios para operar el sitio.' },
      { heading: '2. Uso de la información', body: 'Usamos la información para responder consultas, prestar y mejorar servicios, mantener la seguridad, cumplir obligaciones legales y enviar comunicaciones consentidas.' },
      { heading: '3. Información compartida', body: 'No vendemos datos personales. Solo los compartimos con proveedores necesarios, con tu autorización o cuando la ley lo exige.' },
      { heading: '4. Conservación y seguridad', body: 'Conservamos los datos solo durante el tiempo necesario y aplicamos medidas razonables contra accesos, divulgación, alteración o pérdida no autorizados.' },
      { heading: '5. Tus derechos', body: 'Según la ley aplicable, puedes solicitar acceso, corrección o eliminación de tus datos, o retirar tu consentimiento.' },
      { heading: '6. Contacto', body: 'Para ejercer tus derechos o realizar consultas de privacidad, utiliza el formulario de contacto de esta página.' },
    ],
  },
  'fr-fr': {
    terms: [
      { heading: '1. Acceptation des conditions', body: 'En utilisant les sites, jeux et services associés de StarQ Soft, vous reconnaissez avoir lu, compris et accepté les présentes conditions.' },
      { heading: '2. Utilisation des services', body: 'Vous devez utiliser les services légalement et de façon responsable, sans perturber leur fonctionnement, contourner leur sécurité ni porter atteinte aux droits de tiers.' },
      { heading: '3. Propriété intellectuelle', body: 'Sauf mention contraire, les marques, textes, images, sons et logiciels appartiennent à StarQ Soft ou à leurs titulaires et ne peuvent être exploités commercialement sans autorisation écrite.' },
      { heading: '4. Services tiers', body: 'Les sites et plateformes tiers sont gérés par leurs exploitants ; nous ne répondons pas de leur contenu, disponibilité ou traitement des données.' },
      { heading: '5. Exclusion et limitation de responsabilité', body: 'Nous cherchons à assurer un service stable sans garantir une absence totale d’interruption ou d’erreur. Dans les limites légales, nous déclinons toute responsabilité pour les dommages indirects ou accessoires.' },
      { heading: '6. Modifications et contact', body: 'Nous pouvons modifier ces conditions pour des raisons juridiques ou commerciales. Pour toute question, utilisez le formulaire de contact de cette page.' },
    ],
    privacy: [
      { heading: '1. Données collectées', body: 'Nous pouvons recueillir le nom, l’adresse e-mail et le message fournis via le formulaire, ainsi que les données techniques élémentaires nécessaires au fonctionnement du site.' },
      { heading: '2. Utilisation des données', body: 'Nous utilisons les données pour répondre aux demandes, fournir et améliorer les services, assurer la sécurité, respecter la loi et envoyer les communications consenties.' },
      { heading: '3. Partage des données', body: 'Nous ne vendons pas vos données. Elles ne sont communiquées qu’aux prestataires nécessaires, avec votre accord ou lorsque la loi l’exige.' },
      { heading: '4. Conservation et sécurité', body: 'Nous conservons les données uniquement le temps nécessaire et appliquons des mesures raisonnables contre tout accès, divulgation, modification ou perte non autorisés.' },
      { heading: '5. Vos droits', body: 'Selon la loi applicable, vous pouvez demander l’accès, la rectification ou la suppression de vos données, ou retirer votre consentement.' },
      { heading: '6. Nous contacter', body: 'Pour exercer vos droits ou poser une question, utilisez le formulaire de contact de cette page.' },
    ],
  },
};

Object.assign(localizedContent, {
  'ru-ru': {
    terms: [
      { heading: '1. Принятие условий', body: 'Используя сайты, игры и связанные сервисы StarQ Soft, вы подтверждаете, что прочитали, поняли и приняли настоящие условия.' },
      { heading: '2. Использование и права', body: 'Используйте сервисы законно и ответственно. Нельзя нарушать их работу, обходить защиту или посягать на права других лиц. Материалы принадлежат StarQ Soft или соответствующим правообладателям.' },
      { heading: '3. Ответственность и изменения', body: 'Мы не гарантируем бесперебойную работу и в допустимых законом пределах не отвечаем за косвенные убытки. Условия могут обновляться; вопросы направляйте через форму связи.' },
    ],
    privacy: [
      { heading: '1. Какие данные мы собираем', body: 'Мы можем собирать имя, адрес электронной почты и сообщение из формы связи, а также основные технические данные для работы сайта.' },
      { heading: '2. Использование и передача', body: 'Данные используются для ответов, улучшения и защиты сервисов и соблюдения закона. Мы не продаём персональные данные и передаём их только необходимым подрядчикам, с вашего согласия или по закону.' },
      { heading: '3. Хранение и ваши права', body: 'Мы храним данные только необходимый срок и разумно защищаем их. В соответствии с законом вы можете запросить доступ, исправление, удаление или отозвать согласие через форму связи.' },
    ],
  },
  'vi-vn': {
    terms: [
      { heading: '1. Chấp nhận điều khoản', body: 'Khi sử dụng trang web, trò chơi và dịch vụ liên quan của StarQ Soft, bạn xác nhận đã đọc, hiểu và đồng ý với các điều khoản này.' },
      { heading: '2. Sử dụng và quyền sở hữu', body: 'Bạn phải sử dụng dịch vụ hợp pháp, có trách nhiệm; không gây gián đoạn, vượt qua biện pháp bảo mật hoặc xâm phạm quyền của người khác. Nội dung thuộc StarQ Soft hoặc chủ sở hữu tương ứng.' },
      { heading: '3. Trách nhiệm và thay đổi', body: 'Chúng tôi không bảo đảm dịch vụ luôn liên tục và không chịu trách nhiệm cho thiệt hại gián tiếp trong phạm vi pháp luật cho phép. Điều khoản có thể được cập nhật; vui lòng liên hệ qua biểu mẫu trên trang.' },
    ],
    privacy: [
      { heading: '1. Thông tin thu thập', body: 'Chúng tôi có thể thu thập tên, email, nội dung bạn gửi qua biểu mẫu và dữ liệu kỹ thuật cơ bản cần thiết để vận hành trang web.' },
      { heading: '2. Sử dụng và chia sẻ', body: 'Thông tin được dùng để phản hồi, cải thiện và bảo vệ dịch vụ, tuân thủ pháp luật. Chúng tôi không bán dữ liệu cá nhân và chỉ chia sẻ khi cần thiết, có sự đồng ý hoặc theo yêu cầu pháp luật.' },
      { heading: '3. Lưu trữ và quyền của bạn', body: 'Dữ liệu chỉ được lưu trong thời gian cần thiết và được bảo vệ hợp lý. Theo luật áp dụng, bạn có thể yêu cầu truy cập, sửa, xóa hoặc rút lại sự đồng ý qua biểu mẫu liên hệ.' },
    ],
  },
  'it-it': {
    terms: [
      { heading: '1. Accettazione dei termini', body: 'Utilizzando siti, giochi e servizi correlati di StarQ Soft, confermi di aver letto, compreso e accettato questi termini.' },
      { heading: '2. Utilizzo e proprietà', body: 'Devi usare i servizi legalmente e responsabilmente, senza comprometterne il funzionamento, aggirare la sicurezza o violare diritti altrui. I contenuti appartengono a StarQ Soft o ai rispettivi titolari.' },
      { heading: '3. Responsabilità e modifiche', body: 'Non garantiamo un servizio ininterrotto e, nei limiti di legge, non rispondiamo di danni indiretti. I termini possono essere aggiornati; per domande usa il modulo di contatto.' },
    ],
    privacy: [
      { heading: '1. Dati raccolti', body: 'Possiamo raccogliere nome, e-mail e messaggio inviati tramite il modulo, oltre ai dati tecnici essenziali al funzionamento del sito.' },
      { heading: '2. Uso e condivisione', body: 'Usiamo i dati per rispondere, migliorare e proteggere i servizi e rispettare la legge. Non vendiamo dati personali e li condividiamo solo se necessario, autorizzato o imposto dalla legge.' },
      { heading: '3. Conservazione e diritti', body: 'Conserviamo i dati solo per il tempo necessario e adottiamo misure di sicurezza ragionevoli. Puoi chiedere accesso, correzione, cancellazione o revocare il consenso tramite il modulo.' },
    ],
  },
  'de-de': {
    terms: [
      { heading: '1. Annahme der Bedingungen', body: 'Mit der Nutzung der Websites, Spiele und zugehörigen Dienste von StarQ Soft bestätigen Sie, diese Bedingungen gelesen, verstanden und akzeptiert zu haben.' },
      { heading: '2. Nutzung und Eigentum', body: 'Die Dienste sind rechtmäßig und verantwortungsvoll zu nutzen. Betrieb, Sicherheit und Rechte Dritter dürfen nicht beeinträchtigt werden. Inhalte gehören StarQ Soft oder den jeweiligen Rechteinhabern.' },
      { heading: '3. Haftung und Änderungen', body: 'Ein unterbrechungsfreier Betrieb wird nicht garantiert; soweit gesetzlich zulässig, haften wir nicht für mittelbare Schäden. Die Bedingungen können aktualisiert werden. Fragen richten Sie über das Kontaktformular an uns.' },
    ],
    privacy: [
      { heading: '1. Erhobene Daten', body: 'Wir können Name, E-Mail-Adresse und Nachricht aus dem Kontaktformular sowie grundlegende technische Betriebsdaten erfassen.' },
      { heading: '2. Nutzung und Weitergabe', body: 'Daten dienen der Beantwortung, Verbesserung und Absicherung unserer Dienste sowie gesetzlichen Pflichten. Wir verkaufen keine personenbezogenen Daten und geben sie nur bei Notwendigkeit, Einwilligung oder gesetzlicher Pflicht weiter.' },
      { heading: '3. Speicherung und Rechte', body: 'Daten werden nur so lange wie nötig gespeichert und angemessen geschützt. Sie können nach geltendem Recht Auskunft, Berichtigung, Löschung oder den Widerruf Ihrer Einwilligung verlangen.' },
    ],
  },
  'th-th': {
    terms: [
      { heading: '1. การยอมรับข้อกำหนด', body: 'เมื่อใช้เว็บไซต์ เกม และบริการที่เกี่ยวข้องของ StarQ Soft ถือว่าคุณได้อ่าน เข้าใจ และยอมรับข้อกำหนดเหล่านี้' },
      { heading: '2. การใช้บริการและกรรมสิทธิ์', body: 'คุณต้องใช้บริการอย่างถูกกฎหมายและมีความรับผิดชอบ ห้ามรบกวนระบบ เลี่ยงมาตรการรักษาความปลอดภัย หรือละเมิดสิทธิผู้อื่น เนื้อหาเป็นของ StarQ Soft หรือเจ้าของสิทธิที่เกี่ยวข้อง' },
      { heading: '3. ความรับผิดและการเปลี่ยนแปลง', body: 'เราไม่รับประกันว่าบริการจะไม่หยุดชะงัก และไม่รับผิดชอบความเสียหายทางอ้อมเท่าที่กฎหมายอนุญาต ข้อกำหนดอาจมีการปรับปรุง โปรดติดต่อผ่านแบบฟอร์มในหน้านี้' },
    ],
    privacy: [
      { heading: '1. ข้อมูลที่เก็บรวบรวม', body: 'เราอาจเก็บชื่อ อีเมล และข้อความจากแบบฟอร์มติดต่อ รวมถึงข้อมูลทางเทคนิคพื้นฐานที่จำเป็นต่อการทำงานของเว็บไซต์' },
      { heading: '2. การใช้และเปิดเผยข้อมูล', body: 'เราใช้ข้อมูลเพื่อตอบกลับ ปรับปรุงและรักษาความปลอดภัยของบริการ และปฏิบัติตามกฎหมาย เราไม่ขายข้อมูลส่วนบุคคลและเปิดเผยเฉพาะเมื่อจำเป็น ได้รับอนุญาต หรือกฎหมายกำหนด' },
      { heading: '3. การเก็บรักษาและสิทธิของคุณ', body: 'เราเก็บข้อมูลเท่าที่จำเป็นและใช้มาตรการป้องกันที่เหมาะสม คุณอาจขอเข้าถึง แก้ไข ลบ หรือถอนความยินยอมได้ตามกฎหมายผ่านแบบฟอร์มติดต่อ' },
    ],
  },
  'ms-my': {
    terms: [
      { heading: '1. Penerimaan terma', body: 'Dengan menggunakan laman web, permainan dan perkhidmatan berkaitan StarQ Soft, anda mengesahkan bahawa anda telah membaca, memahami dan menerima terma ini.' },
      { heading: '2. Penggunaan dan pemilikan', body: 'Anda mesti menggunakan perkhidmatan secara sah dan bertanggungjawab tanpa mengganggu operasi, memintas keselamatan atau melanggar hak pihak lain. Kandungan dimiliki oleh StarQ Soft atau pemilik masing-masing.' },
      { heading: '3. Liabiliti dan perubahan', body: 'Kami tidak menjamin perkhidmatan tanpa gangguan dan, setakat dibenarkan undang-undang, tidak bertanggungjawab atas kerugian tidak langsung. Terma boleh dikemas kini; hubungi kami melalui borang di halaman ini.' },
    ],
    privacy: [
      { heading: '1. Maklumat yang dikumpul', body: 'Kami mungkin mengumpul nama, e-mel dan mesej daripada borang hubungan serta data teknikal asas yang diperlukan untuk mengendalikan laman.' },
      { heading: '2. Penggunaan dan perkongsian', body: 'Maklumat digunakan untuk menjawab, menambah baik dan melindungi perkhidmatan serta mematuhi undang-undang. Kami tidak menjual data peribadi dan hanya berkongsi apabila perlu, dibenarkan atau diwajibkan undang-undang.' },
      { heading: '3. Penyimpanan dan hak anda', body: 'Data disimpan hanya selama perlu dan dilindungi secara munasabah. Mengikut undang-undang, anda boleh meminta akses, pembetulan, pemadaman atau menarik balik persetujuan melalui borang hubungan.' },
    ],
  },
});

const lastUpdatedLabels: Record<string, string> = {
  'ja-jp': '最終更新日：2026年7月10日', 'en-us': 'Last updated: July 10, 2026',
  'zh-cn': '最后更新：2026年7月10日', 'zh-tw': '最後更新：2026年7月10日',
  'ko-kr': '최종 업데이트: 2026년 7월 10일', 'es-es': 'Última actualización: 10 de julio de 2026',
  'ru-ru': 'Последнее обновление: 10 июля 2026 г.', 'vi-vn': 'Cập nhật lần cuối: 10 tháng 7 năm 2026',
  'fr-fr': 'Dernière mise à jour : 10 juillet 2026', 'it-it': 'Ultimo aggiornamento: 10 luglio 2026',
  'de-de': 'Zuletzt aktualisiert: 10. Juli 2026', 'th-th': 'อัปเดตล่าสุด: 10 กรกฎาคม 2026',
  'ms-my': 'Kemas kini terakhir: 10 Julai 2026',
};

const LegalModal = ({ documentType, language, title, onClose }: LegalModalProps) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const content = language === 'zh-cn'
    ? chineseContent[documentType]
    : language === 'zh-tw'
      ? traditionalChineseContent[documentType]
    : (localizedContent[language]?.[documentType] ?? englishContent[documentType]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [onClose]);

  return createPortal(
    <LegalModalBackdrop onMouseDown={onClose}>
      <LegalModalDialog
        role="dialog"
        aria-modal="true"
        aria-labelledby={`legal-modal-${documentType}`}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <LegalModalHeader>
          <h2 id={`legal-modal-${documentType}`}>{title}</h2>
          <LegalModalClose ref={closeButtonRef} type="button" onClick={onClose} aria-label="Close">
            <X aria-hidden="true" />
          </LegalModalClose>
        </LegalModalHeader>
        <LegalModalBody>
          {content.map((section) => (
            <section key={section.heading}>
              <h3>{section.heading}</h3>
              <p>{section.body}</p>
            </section>
          ))}
          <small>{lastUpdatedLabels[language] ?? lastUpdatedLabels['en-us']}</small>
        </LegalModalBody>
      </LegalModalDialog>
    </LegalModalBackdrop>,
    document.body,
  );
};

export default LegalModal;

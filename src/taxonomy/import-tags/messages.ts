import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  importWizardButtonCancel: {
    id: 'course-authoring.import-tags.wizard.button.cancel',
    defaultMessage: 'Hủy',
  },
  importWizardButtonNext: {
    id: 'course-authoring.import-tags.wizard.button.next',
    defaultMessage: 'Tiếp theo',
  },
  importWizardButtonPrevious: {
    id: 'course-authoring.import-tags.wizard.button.previous',
    defaultMessage: 'Quay lại',
  },
  importWizardButtonImport: {
    id: 'course-authoring.import-tags.wizard.button.import',
    defaultMessage: 'Nhập',
  },
  importWizardButtonContinue: {
    id: 'course-authoring.import-tags.wizard.button.continue',
    defaultMessage: 'Tiếp tục',
  },
  importWizardButtonConfirm: {
    id: 'course-authoring.import-tags.wizard.button.confirm',
    defaultMessage: 'Đồng ý, nhập tệp',
  },
  importWizardStepExportTitle: {
    id: 'course-authoring.import-tags.wizard.step-export.title',
    defaultMessage: 'Cập nhật "{name}"',
  },
  importWizardStepExportBody: {
    id: 'course-authoring.import-tags.wizard.step-export.body',
    defaultMessage:
      'Để cập nhật taxonomy này, bạn cần nhập một tệp CSV hoặc JSON mới. Taxonomy hiện tại sẽ '
      + 'được thay thế hoàn toàn bởi nội dung trong tệp được nhập (ví dụ: nếu một thẻ trong taxonomy hiện tại '
      + 'không có trong tệp mới, thẻ đó sẽ bị xóa – cả khỏi taxonomy và khỏi mọi nội dung khóa học đã gắn thẻ).'
      + '{br}Bạn có thể muốn xuất taxonomy ở trạng thái hiện tại trước khi nhập tệp mới.',
  },
  importWizardStepExportCSVButton: {
    id: 'course-authoring.import-tags.wizard.step-export.button-csv',
    defaultMessage: 'Tệp CSV',
  },
  importWizardStepExportJSONButton: {
    id: 'course-authoring.import-tags.wizard.step-export.button-json',
    defaultMessage: 'Tệp JSON',
  },
  importWizardStepUploadTitle: {
    id: 'course-authoring.import-tags.wizard.step-upload.title',
    defaultMessage: 'Tải tệp lên',
  },
  importWizardStepUploadClearFile: {
    id: 'course-authoring.import-tags.wizard.step-upload.clear-file',
    defaultMessage: 'Xóa tệp',
  },
  importWizardStepUploadBody: {
    id: 'course-authoring.import-tags.wizard.step-upload.body',
    defaultMessage:
      'Bạn có thể tải lên tệp CSV hoặc JSON để tạo một taxonomy mới. Bạn có thể dùng bất kỳ công cụ bảng tính nào '
      + '(cho tệp CSV) hoặc bất kỳ trình soạn thảo văn bản nào (cho tệp JSON) để tạo tệp cần nhập. '
      + 'Để xem ví dụ về định dạng yêu cầu, hãy tải {csvTemplateUrl} hoặc {jsonTemplateUrl}.'
      + '{br}Khi tệp đã sẵn sàng để nhập, hãy kéo và thả tệp vào ô bên dưới hoặc nhấp để tải tệp lên.',
  },
  importWizardStepReuploadBody: {
    id: 'course-authoring.import-tags.wizard.step-reupload.body',
    defaultMessage:
      'Bạn có thể dùng bất kỳ công cụ bảng tính nào (cho tệp CSV), hoặc bất kỳ trình soạn thảo văn bản nào (cho tệp JSON) để tạo '
      + 'tệp mà bạn muốn nhập.'
      + '{br}Khi tệp đã sẵn sàng để nhập, hãy kéo và thả tệp vào ô bên dưới hoặc nhấp để tải tệp lên.',
  },
  csvTemplateTitle: {
    id: 'course-authoring.import-tags.wizard.step-upload.csv-template',
    defaultMessage: 'Mẫu CSV',
  },
  jsonTemplateTitle: {
    id: 'course-authoring.import-tags.wizard.step-upload.json-template',
    defaultMessage: 'Mẫu JSON',
  },
  importWizardStepPopulateTitle: {
    id: 'course-authoring.import-tags.wizard.step-populate.title',
    defaultMessage: 'Điền thông tin taxonomy',
  },
  importWizardStepPopulateTaxonomyName: {
    id: 'course-authoring.import-tags.wizard.step-populate.name',
    defaultMessage: 'Tên taxonomy',
  },
  importWizardStepPopulateTaxonomyDesc: {
    id: 'course-authoring.import-tags.wizard.step-populate.desc',
    defaultMessage: 'Mô tả taxonomy',
  },
  importWizardStepPlanTitle: {
    id: 'course-authoring.import-tags.wizard.step-plan.title',
    defaultMessage: 'Khác biệt giữa các tệp',
  },
  importWizardStepPlanBody: {
    id: 'course-authoring.import-tags.wizard.step-plan.body',
    defaultMessage:
      'Việc nhập tệp này sẽ tạo {changeCount} thay đổi đối với taxonomy hiện có. '
      + 'Nội dung trong tệp được nhập sẽ thay thế mọi giá trị hiện có không trùng với giá trị mới.'
      + '{br}Việc nhập tệp này sẽ dẫn đến các thay đổi sau:',
  },
  importWizardStepPlanNoChanges: {
    id: 'course-authoring.import-tags.wizard.step-plan.no-changes',
    defaultMessage: 'Không có thay đổi',
  },
  importWizardStepConfirmTitle: {
    id: 'course-authoring.import-tags.wizard.step-confirm.title',
    defaultMessage: 'Nhập và thay thế thẻ',
  },
  importWizardStepConfirmBody: {
    id: 'course-authoring.import-tags.wizard.step-confirm.body',
    defaultMessage:
      'Cảnh báo! Bạn sắp thực hiện {changeCount} thay đổi đối với taxonomy hiện có. Mọi thẻ đã gắn '
      + 'vào nội dung khóa học sẽ được cập nhật hoặc xóa. Thao tác này không thể hoàn tác.'
      + '{br}Bạn có chắc chắn muốn tiếp tục nhập tệp này không?',
  },
  promptTaxonomyName: {
    id: 'course-authoring.import-tags.prompt.taxonomy-name',
    defaultMessage: 'Nhập tên cho taxonomy mới',
  },
  promptTaxonomyNameRequired: {
    id: 'course-authoring.import-tags.prompt.taxonomy-name.required',
    defaultMessage: 'Bạn phải nhập tên cho taxonomy mới',
  },
  promptTaxonomyExportId: {
    id: 'course-authoring.import-tags.prompt.taxonomy-export-id',
    defaultMessage:
      "Nhập Export ID cho taxonomy mới. Chỉ được chứa ký tự chữ, số hoặc '_' '-' '.'",
  },
  promptTaxonomyExportIdRequired: {
    id: 'course-authoring.import-tags.prompt.taxonomy-export-id.required',
    defaultMessage: 'Bạn phải nhập Export ID cho taxonomy mới.',
  },
  promptTaxonomyExportIdInvalid: {
    id: 'course-authoring.import-tags.prompt.taxonomy-export-id.invalid',
    defaultMessage:
      "Export ID không hợp lệ. Chỉ được chứa ký tự chữ, số hoặc '_' '-' '.'",
  },
  promptTaxonomyDescription: {
    id: 'course-authoring.import-tags.prompt.taxonomy-description',
    defaultMessage: 'Nhập mô tả cho taxonomy mới',
  },
  importTaxonomySuccess: {
    id: 'course-authoring.import-tags.success',
    defaultMessage: 'Nhập taxonomy thành công',
  },
  importTaxonomyError: {
    id: 'course-authoring.import-tags.error',
    defaultMessage: 'Nhập thất bại – xem chi tiết trong bảng điều khiển (console) của trình duyệt',
  },
  importNewTaxonomyToast: {
    id: 'course-authoring.import-tags.new.toast.success',
    defaultMessage: '"{name}" đã được nhập',
  },
  importTaxonomyToast: {
    id: 'course-authoring.import-tags.toast.success',
    defaultMessage: '"{name}" đã được cập nhật',
  },
  importTaxonomyErrorAlert: {
    id: 'course-authoring.import-tags.error-alert.title',
    defaultMessage: 'Lỗi nhập dữ liệu',
  },
  importWizardStepperExportStepTitle: {
    id: 'course-authoring.import-tags.wizard.stepper.export-step.title',
    defaultMessage: 'Xuất',
  },
  importWizardStepperUploadStepTitle: {
    id: 'course-authoring.import-tags.wizard.stepper.upload-step.title',
    defaultMessage: 'Tải lên',
  },
  importWizardStepperPopulateStepTitle: {
    id: 'course-authoring.import-tags.wizard.stepper.populate-step.title',
    defaultMessage: 'Điền thông tin',
  },
  importWizardStepperPlanStepTitle: {
    id: 'course-authoring.import-tags.wizard.stepper.plan-step.title',
    defaultMessage: 'Kế hoạch',
  },
  importWizardStepperConfirmStepTitle: {
    id: 'course-authoring.import-tags.wizard.stepper.confirm-step.title',
    defaultMessage: 'Xác nhận',
  },
});

export default messages;

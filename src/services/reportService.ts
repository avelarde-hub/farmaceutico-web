export class ReportService {
  public static exportReport(reportName: string): void {
    const message = `Exportación demo ejecutada correctamente para: ${reportName}`;
    window.alert(message);
  }
}

import React, { forwardRef } from 'react';
import PrintHeader from '../../../component/PrintHeader';
import PrintFooter from '../../../component/PrintFooter';
import dayjs from 'dayjs';

const CategoryPrintStatement = forwardRef(({
  categoryName = '',
  startDate = null,
  endDate = null,
  expensesList = [],
  totalUSD = 0,
  branchId = 'HQ',
}, ref) => {
  const formattedStartDate = startDate ? dayjs(startDate).format('DD/MM/YYYY') : '';
  const formattedEndDate = endDate ? dayjs(endDate).format('DD/MM/YYYY') : '';

  let periodText = 'All Transactions';
  if (formattedStartDate && formattedEndDate) {
    periodText = `${formattedStartDate} - ${formattedEndDate}`;
  } else if (formattedStartDate) {
    periodText = `From ${formattedStartDate}`;
  } else if (formattedEndDate) {
    periodText = `Up to ${formattedEndDate}`;
  }

  return (
    <div ref={ref} className="print-category-statement" style={{ padding: '24px', backgroundColor: '#fff', color: '#1a1a1a', fontFamily: 'Arial, sans-serif' }}>
      <style>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 12mm 10mm 15mm 10mm;
          }
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            background-color: #fff !important;
          }
          .print-category-statement {
            padding: 0 !important;
            width: 100% !important;
          }
          .print-statement-table {
            width: 100% !important;
            border-collapse: collapse !important;
          }
          .print-statement-table th {
            background-color: #30368a !important;
            color: #fff !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            font-size: 11px !important;
            padding: 6px 8px !important;
            border: 1px solid #30368a !important;
          }
          .print-statement-table td {
            font-size: 10px !important;
            padding: 5px 8px !important;
            border: 1px solid #e2e8f0 !important;
          }
          .print-statement-table tr:nth-child(even) td {
            background-color: #f8fafc !important;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>

      {/* Company Header */}
      <PrintHeader branchId={branchId} />

      <hr style={{ border: 'none', borderTop: '2px solid #30368a', margin: '12px 0 16px' }} />

      {/* Statement Title & Meta */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
        <div>
          <h2 style={{ margin: '0 0 4px', fontSize: '20px', fontWeight: 'bold', color: '#30368a' }}>
            EXPENSES STATEMENT: {categoryName ? categoryName.toUpperCase() : 'CATEGORY'}
          </h2>
          <p style={{ margin: '0', fontSize: '13px', color: '#475569' }}>
            <strong>Statement Period:</strong> {periodText}
          </p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{
            display: 'inline-block',
            backgroundColor: '#f1f5f9',
            border: '1px solid #cbd5e1',
            borderRadius: '8px',
            padding: '8px 14px',
            textAlign: 'right'
          }}>
            <span style={{ fontSize: '11px', color: '#64748b', display: 'block' }}>TOTAL AMOUNT</span>
            <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#30368a' }}>
              $ {Number(totalUSD || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
            <span style={{ fontSize: '10px', color: '#64748b', display: 'block', marginTop: '2px' }}>
              {expensesList.length} transaction{expensesList.length === 1 ? '' : 's'}
            </span>
          </div>
        </div>
      </div>

      {/* Statement Table */}
      <table className="print-statement-table" style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#30368a', color: '#fff' }}>
            <th style={{ padding: '8px', border: '1px solid #30368a', textAlign: 'left', width: '75px', fontSize: '11px' }}>#</th>
            <th style={{ padding: '8px', border: '1px solid #30368a', textAlign: 'center', width: '85px', fontSize: '11px' }}>Date</th>
            <th style={{ padding: '8px', border: '1px solid #30368a', textAlign: 'left', width: '90px', fontSize: '11px' }}>Account</th>
            <th style={{ padding: '8px', border: '1px solid #30368a', textAlign: 'left', fontSize: '11px' }}>Description / Details</th>
            <th style={{ padding: '8px', border: '1px solid #30368a', textAlign: 'right', width: '90px', fontSize: '11px' }}>Amount (FC)</th>
            <th style={{ padding: '8px', border: '1px solid #30368a', textAlign: 'center', width: '60px', fontSize: '11px' }}>Rate</th>
            <th style={{ padding: '8px', border: '1px solid #30368a', textAlign: 'right', width: '95px', fontSize: '11px' }}>Total ($)</th>
          </tr>
        </thead>
        <tbody>
          {expensesList && expensesList.length > 0 ? (
            expensesList.map((row, idx) => {
              const formattedDate = dayjs(row.expenseDate).format('DD/MM/YYYY');
              const expNum = `D-${String(row.expenseNumber || 0).padStart(6, '0')}`;
              
              let details = row.description || '-';
              if ((row.accountName === 'Project' || row.accountName === 'Maintenance') && row.accountNameInfo?.name) {
                details = row.accountNameInfo.name + (row.description ? ` (${row.description})` : '');
              } else if (row.accountName === 'Employee' && Array.isArray(row.employeeName) && row.employeeName.length > 0) {
                details = row.employeeName.map(emp => `${emp.employee || 'Employee'} (FC ${Number(emp.amount || 0).toLocaleString()} / $${Number(emp.total || 0).toFixed(2)})`).join('; ');
              }

              return (
                <tr key={row._id || idx} style={{ backgroundColor: idx % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                  <td style={{ padding: '6px 8px', border: '1px solid #e2e8f0', fontSize: '11px', fontWeight: 'bold' }}>{expNum}</td>
                  <td style={{ padding: '6px 8px', border: '1px solid #e2e8f0', textAlign: 'center', fontSize: '11px' }}>{formattedDate}</td>
                  <td style={{ padding: '6px 8px', border: '1px solid #e2e8f0', fontSize: '11px' }}>{row.accountName || '-'}</td>
                  <td style={{ padding: '6px 8px', border: '1px solid #e2e8f0', fontSize: '11px' }}>{details}</td>
                  <td style={{ padding: '6px 8px', border: '1px solid #e2e8f0', textAlign: 'right', fontSize: '11px' }}>
                    {row.amount ? `FC ${Number(row.amount).toLocaleString()}` : '-'}
                  </td>
                  <td style={{ padding: '6px 8px', border: '1px solid #e2e8f0', textAlign: 'center', fontSize: '11px' }}>
                    {row.rate || '-'}
                  </td>
                  <td style={{ padding: '6px 8px', border: '1px solid #e2e8f0', textAlign: 'right', fontSize: '11px', fontWeight: 'bold' }}>
                    $ {Number(row.total || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={7} style={{ padding: '16px', textAlign: 'center', color: '#64748b' }}>
                No expenses found for the selected period.
              </td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr style={{ backgroundColor: '#f1f5f9', fontWeight: 'bold' }}>
            <td colSpan={4} style={{ padding: '8px', border: '1px solid #cbd5e1', textAlign: 'right', fontSize: '12px' }}>
              GRAND TOTAL:
            </td>
            <td colSpan={3} style={{ padding: '8px', border: '1px solid #cbd5e1', textAlign: 'right', fontSize: '13px', color: '#30368a' }}>
              $ {Number(totalUSD || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </td>
          </tr>
        </tfoot>
      </table>

      {/* Footer */}
      <div style={{ marginTop: '24px' }}>
        <PrintFooter branchId={branchId} />
      </div>
    </div>
  );
});

export default CategoryPrintStatement;

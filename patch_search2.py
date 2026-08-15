import sys

file = 'server/routes/Routes.js'
with open(file, 'r', encoding='utf-8') as f:
    content = f.read()

# Update payRoll-Information search
old_payroll_search = '''    if (search) {
      const escapedSearch = search.trim().replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&');
      const regex = new RegExp(escapedSearch, 'i');
      query.$or = [{ 'employeeName.name': regex }];
    }'''

new_payroll_search = '''    if (search) {
      const escapedSearch = search.trim().replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&');
      const regex = new RegExp(escapedSearch, 'i');
      const isNum = !isNaN(Number(search)) && search.trim() !== '';
      const num = isNum ? Number(search) : null;
      query.$or = [
        { 'employeeName.name': regex },
        { status: regex },
        { words: regex }
      ];
      if (isNum) {
          query.$or.push({ payNumber: num });
          query.$or.push({ daysW: num });
          query.$or.push({ totalPaidDollars: num });
          query.$or.push({ totalNet: num });
      }
    }'''
content = content.replace(old_payroll_search, new_payroll_search)

# Update expense-Information search
old_expense_search = '''    if (search) {
      const escapedSearch = search.trim().replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&');
      const regex = new RegExp(escapedSearch, 'i');
      query.$or = [
        { expenseNumber: isNaN(Number(search)) ? null : Number(search) },
        { description: regex },
        { accountName: regex },
        { 'employeeName.employee': regex },
        { 'expenseCategory.expensesCategory': regex },
        { 'accountNameInfo.name': regex },
      ].filter(condition => condition !== null);
    }'''

new_expense_search = '''    if (search) {
      const escapedSearch = search.trim().replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&');
      const regex = new RegExp(escapedSearch, 'i');
      const isNum = !isNaN(Number(search)) && search.trim() !== '';
      const num = isNum ? Number(search) : null;
      query.$or = [
        { description: regex },
        { accountName: regex },
        { 'employeeName.employee': regex },
        { 'expenseCategory.expensesCategory': regex },
        { 'accountNameInfo.name': regex },
      ];
      if (isNum) {
          query.$or.push({ expenseNumber: num });
          query.$or.push({ amount: num });
          query.$or.push({ total: num });
      }
    }'''
content = content.replace(old_expense_search, new_expense_search)

with open(file, 'w', encoding='utf-8') as f:
    f.write(content)
print('Done updating Routes.js')

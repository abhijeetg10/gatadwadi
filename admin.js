document.addEventListener('DOMContentLoaded', () => {
    // 0. Seed Data
    const seedDataIfEmpty = () => {
        if (!localStorage.getItem('gatadwadi_payments')) {
            const dummyPayments = [
                { id: 'REQ-10294', date: '04/03/2026', time: '10:30 AM', name: 'Ramesh Patil', houseNo: '45/B', amount: '250', category: 'Water Bill', status: 'Paid' },
                { id: 'REQ-49210', date: '03/03/2026', time: '02:15 PM', name: 'Suresh Deshmukh', houseNo: '112', amount: '1200', category: 'House Tax (Ghar Patti)', status: 'Paid' },
                { id: 'REQ-88321', date: '02/03/2026', time: '11:45 AM', name: 'Ankita Kadam', houseNo: '88/A', amount: '250', category: 'Water Bill', status: 'Paid' },
                { id: 'REQ-55123', date: '01/03/2026', time: '09:20 AM', name: 'Vikram Singh', houseNo: '14/C', amount: '250', category: 'Water Bill', status: 'Paid' },
                { id: 'REQ-99234', date: '28/02/2026', time: '04:50 PM', name: 'Priya Joshi', houseNo: '202', amount: '1500', category: 'House Tax (Ghar Patti)', status: 'Paid' }
            ];
            const dummyComplaints = [
                { id: 'REQ-33102', date: '04/03/2026', time: '08:10 AM', name: 'Rahul Sharma', phone: '9876543210', category: 'Water Supply Issue', status: 'Pending' },
                { id: 'REQ-11293', date: '02/03/2026', time: '03:40 PM', name: 'Sneha Verma', phone: '9123456780', category: 'Street Lights / Electricity', status: 'Solved' },
                { id: 'REQ-77482', date: '01/03/2026', time: '12:00 PM', name: 'Amit Gokhale', phone: '9988776655', category: 'Sanitation & Garbage Collection', status: 'Pending' }
            ];
            localStorage.setItem('gatadwadi_payments', JSON.stringify(dummyPayments));
            localStorage.setItem('gatadwadi_complaints', JSON.stringify(dummyComplaints));
        }
        if (!localStorage.getItem('gatadwadi_certificates')) {
            const dummyCerts = [
                { id: 'REQ-66321', date: '04/03/2026', time: '10:00 AM', name: 'Kiran Desai', category: 'Birth Certificate', status: 'Pending' },
                { id: 'REQ-22194', date: '02/03/2026', time: '11:20 AM', name: 'Pooja Kale', category: 'Income Certificate', status: 'Approved' }
            ];
            localStorage.setItem('gatadwadi_certificates', JSON.stringify(dummyCerts));
        }
    };
    seedDataIfEmpty();

    // 1. Fetch Data from LocalStorage
    const fetchStorage = (key) => {
        return JSON.parse(localStorage.getItem(key)) || [];
    };

    let payments = fetchStorage('gatadwadi_payments');
    let complaints = fetchStorage('gatadwadi_complaints');
    let certificates = fetchStorage('gatadwadi_certificates');
    let notices = fetchStorage('gatadwadi_notices');

    // 2. Initialize Dashboard Stats
    const totalRevenue = payments.reduce((sum, p) => sum + parseFloat(p.amount || 0), 0);
    const pendingComplaints = complaints.filter(c => c.status !== 'Solved').length;
    const approvedCerts = certificates.filter(c => c.status === 'Approved').length;

    document.getElementById('statRevenue').textContent = `₹ ${totalRevenue.toLocaleString('en-IN')}`;
    document.getElementById('statPaymentsCount').textContent = payments.length;
    document.getElementById('statPendingComplaints').textContent = pendingComplaints;
    const statApprovedCerts = document.getElementById('statApprovedCerts');
    if (statApprovedCerts) statApprovedCerts.textContent = approvedCerts;


    // 3. Render Payments Table
    const renderPayments = () => {
        const tBody = document.getElementById('paymentsTableBody');
        const emptyState = document.getElementById('emptyPayments');

        tBody.innerHTML = '';
        if (payments.length === 0) {
            emptyState.classList.remove('hidden');
            return;
        }

        emptyState.classList.add('hidden');
        payments.forEach((p, index) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><strong>${p.id}</strong></td>
                <td>${p.date}<br><span style="font-size: 0.8em; color: gray;">${p.time}</span></td>
                <td>${p.name} <br><span style="font-size: 0.85em; color: gray;">House: ${p.houseNo}</span></td>
                <td>${p.category}</td>
                <td><strong>₹ ${parseFloat(p.amount).toLocaleString('en-IN')}</strong></td>
                <td><span class="badge paid">Paid</span></td>
                <td>
                    <button class="action-btn outline-btn-green" onclick="openEditModal(${index}, 'payments')" style="padding: 4px 8px; font-size: 0.8rem; border-radius:4px;"><span class="material-icons" style="font-size: 1rem; vertical-align: middle;">edit</span></button>
                    <button class="action-btn" onclick="deleteRecord(${index}, 'payments')" style="padding: 4px 8px; font-size: 0.8rem; border-radius:4px; border: 1px solid #ef4444; color: #ef4444;"><span class="material-icons" style="font-size: 1rem; vertical-align: middle;">delete</span></button>
                </td>
            `;
            tBody.appendChild(tr);
        });
    };

    // 4. Render Complaints Table
    const renderComplaints = () => {
        const tBody = document.getElementById('complaintsTableBody');
        const emptyState = document.getElementById('emptyComplaints');

        tBody.innerHTML = '';
        if (complaints.length === 0) {
            emptyState.classList.remove('hidden');
            return;
        }

        emptyState.classList.add('hidden');
        complaints.forEach((c, index) => {
            const isSolved = c.status === 'Solved';
            const badgeClass = isSolved ? 'solved' : 'pending';
            const btnText = isSolved ? 'Reopen' : 'Mark Solved';

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><strong>${c.id}</strong></td>
                <td>${c.date}<br><span style="font-size: 0.8em; color: gray;">${c.time}</span></td>
                <td>${c.name} <br><span style="font-size: 0.85em; color: gray;">📞 ${c.phone}</span></td>
                <td>
                    ${c.category}
                    ${c.photo ? `<br><a href="${c.photo}" target="_blank" style="font-size: 0.8rem; color: #3b82f6; text-decoration: underline; display: flex; align-items: center; gap: 2px; margin-top: 4px;"><span class="material-icons" style="font-size: 14px;">image</span> View Photo</a>` : ''}
                </td>
                <td><span class="badge ${badgeClass}">${c.status}</span></td>
                <td style="display:flex; gap: 4px; align-items:center;">
                    <button class="action-btn toggle-status" data-index="${index}">${btnText}</button>
                    <button class="action-btn outline-btn-green" onclick="openEditModal(${index}, 'complaints')" style="padding: 4px 8px; font-size: 0.8rem; border-radius:4px;"><span class="material-icons" style="font-size: 1rem; vertical-align: middle;">edit</span></button>
                    <button class="action-btn" onclick="deleteRecord(${index}, 'complaints')" style="padding: 4px 8px; font-size: 0.8rem; border-radius:4px; border: 1px solid #ef4444; color: #ef4444;"><span class="material-icons" style="font-size: 1rem; vertical-align: middle;">delete</span></button>
                </td>
            `;
            tBody.appendChild(tr);
        });

        // Attach event listeners to toggle buttons dynamically
        document.querySelectorAll('.toggle-status').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = e.target.getAttribute('data-index');
                toggleComplaintStatus(idx);
            });
        });
    };

    // 4b. Render Certificates Table
    const renderCertificates = () => {
        const tBody = document.getElementById('certificatesTableBody');
        const emptyState = document.getElementById('emptyCertificates');
        if (!tBody) return;

        tBody.innerHTML = '';
        if (certificates.length === 0) {
            emptyState.classList.remove('hidden');
            return;
        }

        emptyState.classList.add('hidden');
        certificates.forEach((c, index) => {
            let badgeClass = 'pending';
            if (c.status === 'Approved') badgeClass = 'solved';
            if (c.status === 'Rejected') badgeClass = 'rejected';

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><strong>${c.id}</strong></td>
                <td>${c.date}</td>
                <td>${c.name}</td>
                <td>${c.category}</td>
                <td><span class="badge ${badgeClass}">${c.status}</span></td>
                <td style="display:flex; gap: 4px; align-items:center;">
                    <select class="action-btn toggle-cert-status" data-index="${index}" style="padding:4px; border-radius:4px; font-size:0.8rem;">
                        <option value="Pending" ${c.status === 'Pending' ? 'selected' : ''}>Pending</option>
                        <option value="Approved" ${c.status === 'Approved' ? 'selected' : ''}>Approved</option>
                        <option value="Rejected" ${c.status === 'Rejected' ? 'selected' : ''}>Rejected</option>
                    </select>
                    <button class="action-btn outline-btn-green" onclick="openEditModal(${index}, 'certificates')" style="padding: 4px 8px; font-size: 0.8rem; border-radius:4px;"><span class="material-icons" style="font-size: 1rem; vertical-align: middle;">edit</span></button>
                    <button class="action-btn" onclick="deleteRecord(${index}, 'certificates')" style="padding: 4px 8px; font-size: 0.8rem; border-radius:4px; border: 1px solid #ef4444; color: #ef4444;"><span class="material-icons" style="font-size: 1rem; vertical-align: middle;">delete</span></button>
                </td>
            `;
            tBody.appendChild(tr);
        });

        document.querySelectorAll('.toggle-cert-status').forEach(sel => {
            sel.addEventListener('change', (e) => {
                const idx = e.target.getAttribute('data-index');
                const newStatus = e.target.value;
                certificates[idx].status = newStatus;
                localStorage.setItem('gatadwadi_certificates', JSON.stringify(certificates));
                renderCertificates();
                const newApproved = certificates.filter(cert => cert.status === 'Approved').length;
                if (document.getElementById('statApprovedCerts')) document.getElementById('statApprovedCerts').textContent = newApproved;
            });
        });
    };

    // 4c. Render Notices Table
    const renderNotices = () => {
        const tBody = document.getElementById('noticesTableBody');
        const emptyState = document.getElementById('emptyNotices');
        if (!tBody) return;

        tBody.innerHTML = '';
        if (notices.length === 0) {
            emptyState.classList.remove('hidden');
            return;
        }

        emptyState.classList.add('hidden');
        notices.forEach((n, index) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><strong>${n.id}</strong></td>
                <td>${n.date}</td>
                <td>${n.text}</td>
                <td><button class="action-btn delete-notice" data-index="${index}" style="color:red; border-color:red;">Delete</button></td>
            `;
            tBody.appendChild(tr);
        });

        document.querySelectorAll('.delete-notice').forEach(btn => {
            btn.addEventListener('click', (e) => {
                if (confirm('Are you sure you want to delete this notice?')) {
                    const idx = e.target.getAttribute('data-index');
                    notices.splice(idx, 1);
                    localStorage.setItem('gatadwadi_notices', JSON.stringify(notices));
                    renderNotices();
                }
            });
        });
    };

    // 5. Toggle Complaint Status Function
    window.toggleComplaintStatus = (index) => {
        if (complaints[index]) {
            if (complaints[index].status === 'Solved') {
                complaints[index].status = 'Pending';
            } else {
                complaints[index].status = 'Solved';
            }

            // Save updated array back to localStorage
            localStorage.setItem('gatadwadi_complaints', JSON.stringify(complaints));

            // Re-render
            renderComplaints();
            if (typeof renderCharts === 'function') {
                renderCharts();
            }

            // Update stats
            const newPending = complaints.filter(c => c.status !== 'Solved').length;
            document.getElementById('statPendingComplaints').textContent = newPending;
        }
    };

    // 6. Initial Render Call
    renderPayments();
    renderComplaints();
    renderCertificates();
    renderNotices();

    // 6b. Notice Form Handler
    const noticeForm = document.getElementById('addNoticeForm');
    if (noticeForm) {
        noticeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const textInput = document.getElementById('newNoticeText');
            if (textInput.value.trim() === '') return;

            const newNotice = {
                id: 'N-' + Math.floor(1000 + Math.random() * 9000),
                text: textInput.value.trim(),
                date: new Date().toLocaleDateString('en-GB')
            };

            notices.unshift(newNotice);
            localStorage.setItem('gatadwadi_notices', JSON.stringify(notices));

            textInput.value = '';
            renderNotices();
        });
    }

    // 7. Render Charts
    const renderCharts = () => {
        // Prepare Data for Revenue Chart
        const revenueCtx = document.getElementById('revenueChart');
        if (!revenueCtx) return;

        const revByDate = {};
        payments.forEach(p => {
            if (!revByDate[p.date]) revByDate[p.date] = 0;
            revByDate[p.date] += parseFloat(p.amount);
        });

        let sortedDates = Object.keys(revByDate).sort((a, b) => {
            let partsA = a.split('/');
            let partsB = b.split('/');
            // Ensure length 3 for split
            if (partsA.length === 3 && partsB.length === 3) {
                return new Date(`${partsA[2]}-${partsA[1]}-${partsA[0]}`) - new Date(`${partsB[2]}-${partsB[1]}-${partsB[0]}`);
            }
            return 0;
        });

        const revLabels = sortedDates.slice(-7);
        const revData = revLabels.map(d => revByDate[d]);

        // Destroy previous chart instances if they exist to prevent hover glitches
        if (window.revenueChartInstance) {
            window.revenueChartInstance.destroy();
        }

        window.revenueChartInstance = new Chart(revenueCtx.getContext('2d'), {
            type: 'line',
            data: {
                labels: revLabels,
                datasets: [{
                    label: 'Revenue (₹)',
                    data: revData,
                    borderColor: '#68bd62',
                    backgroundColor: 'rgba(104, 189, 98, 0.1)',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: { beginAtZero: true }
                }
            }
        });

        // Prepare Data for Complaints Doughnut
        const compCtx = document.getElementById('complaintsChart');
        if (!compCtx) return;

        const solvedCount = complaints.filter(c => c.status === 'Solved').length;
        const pendingCount = complaints.filter(c => c.status !== 'Solved').length;

        if (window.complaintsChartInstance) {
            window.complaintsChartInstance.destroy();
        }

        window.complaintsChartInstance = new Chart(compCtx.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: ['Solved', 'Pending'],
                datasets: [{
                    data: [solvedCount, pendingCount],
                    backgroundColor: ['#68bd62', '#ef4444'],
                    borderWidth: 0,
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '70%',
                plugins: {
                    legend: { position: 'bottom' }
                }
            }
        });
    };

    // 8. Edit & Delete Logic
    window.deleteRecord = (index, type) => {
        if (!confirm('Are you sure you want to permanently delete this record?')) return;

        let targetArray;
        let storageKey;
        if (type === 'payments') { targetArray = payments; storageKey = 'gatadwadi_payments'; }
        if (type === 'complaints') { targetArray = complaints; storageKey = 'gatadwadi_complaints'; }
        if (type === 'certificates') { targetArray = certificates; storageKey = 'gatadwadi_certificates'; }

        if (targetArray) {
            targetArray.splice(index, 1);
            localStorage.setItem(storageKey, JSON.stringify(targetArray));

            // Re-render appropriate table
            if (type === 'payments') renderPayments();
            if (type === 'complaints') renderComplaints();
            if (type === 'certificates') renderCertificates();

            renderCharts(); // update charts
        }
    };

    const editModal = document.getElementById('editModal');
    const editForm = document.getElementById('editForm');

    window.openEditModal = (index, type) => {
        document.getElementById('editIndex').value = index;
        document.getElementById('editType').value = type;

        const phoneGroup = document.getElementById('editPhoneGroup');
        const phoneInput = document.getElementById('editPhone');
        const nameInput = document.getElementById('editName');

        let dataObj;
        if (type === 'payments') dataObj = payments[index];
        if (type === 'complaints') dataObj = complaints[index];
        if (type === 'certificates') dataObj = certificates[index];

        nameInput.value = dataObj.name;

        // Show phone input ONLY for complaints (or house no for payments)
        if (type === 'complaints') {
            phoneGroup.style.display = 'block';
            phoneGroup.querySelector('label').textContent = 'Phone Number';
            phoneInput.value = dataObj.phone;
        } else if (type === 'payments') {
            phoneGroup.style.display = 'block';
            phoneGroup.querySelector('label').textContent = 'House No.';
            phoneInput.value = dataObj.houseNo;
        } else {
            phoneGroup.style.display = 'none';
        }

        editModal.classList.remove('hidden');
    };

    window.closeEditModal = () => {
        editModal.classList.add('hidden');
        editForm.reset();
    };

    if (editForm) {
        editForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const index = document.getElementById('editIndex').value;
            const type = document.getElementById('editType').value;
            const newName = document.getElementById('editName').value;
            const newPhoneOrHouse = document.getElementById('editPhone').value;

            if (type === 'payments') {
                payments[index].name = newName;
                payments[index].houseNo = newPhoneOrHouse;
                localStorage.setItem('gatadwadi_payments', JSON.stringify(payments));
                renderPayments();
            } else if (type === 'complaints') {
                complaints[index].name = newName;
                complaints[index].phone = newPhoneOrHouse;
                localStorage.setItem('gatadwadi_complaints', JSON.stringify(complaints));
                renderComplaints();
            } else if (type === 'certificates') {
                certificates[index].name = newName;
                localStorage.setItem('gatadwadi_certificates', JSON.stringify(certificates));
                renderCertificates();
            }

            closeEditModal();
        });
    }

    // 9. Export to CSV Logic
    window.exportData = (type) => {
        let data = [];
        let filename = `${type}_export_${new Date().toLocaleDateString('en-GB').replace(/\//g, '-')}.csv`;

        if (type === 'payments') data = payments;
        else if (type === 'complaints') data = complaints;
        else if (type === 'certificates') data = certificates;

        if (!data || data.length === 0) {
            alert('No data available to export for ' + type);
            return;
        }

        // Get headers from first object keys
        const headers = Object.keys(data[0]);

        // Build CSV string
        let csvContent = headers.join(',') + '\n';

        data.forEach(row => {
            let rowData = headers.map(header => {
                let cell = row[header] === null || row[header] === undefined ? '' : String(row[header]);
                // Escape quotes and wrap in quotes if there are commas
                cell = cell.replace(/"/g, '""');
                if (cell.search(/("|,|\n)/g) >= 0) cell = `"${cell}"`;
                return cell;
            });
            csvContent += rowData.join(',') + '\n';
        });

        // Trigger Download
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);

        link.setAttribute("href", url);
        link.setAttribute("download", filename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

});

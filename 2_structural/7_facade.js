// Суть паттерна -> Создание более простого интерфейса для взаимодействия клиентского кода.

class Complaints {
    constructor() {
        this.complaints = [];
    }
    reply(complaint) {}

    add(complaint) {
        this.complaints.push(complaint);
        return this.reply(complaint);
    }
}

class ProductComplaints extends Complaints {
    reply({id, customer, details}) {
        return `Product: ${id}: ${customer} (${details})`;
    }
}

class ServiceComplaints extends Complaints {
    reply({id, customer, details}) {
        return `Service: ${id}: ${customer} (${details})`;
    }
}

class ComplaintRegistry {
    register(customer, type, details) {
        let complaint;
        if(type === 'service') {
            complaint = new ServiceComplaints();
        }
        if(type === 'product') {
            complaint = new ProductComplaints();
        }
        return complaint.add(
            {
                id: Date.now(),
                customer,
                details
            }
        );
    }
}

const registry = new ComplaintRegistry();
console.log(registry.register("Alexandr", "service", "недоступен"));
console.log(registry.register("Elena", "product", "появляется ошибка"));

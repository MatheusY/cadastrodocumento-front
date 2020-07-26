import { OnInit, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'app/shared/components/models';
import { UserService } from 'app/core/services';

@Component({
    selector: 'ap-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
    user$: Observable<User>;
    constructor(private userService: UserService){ }
    
    ngOnInit(): void {
        this.user$ = this.userService.getUser();
    }

    
}